﻿// MIT License
//
// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd and Contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

using Microsoft.Extensions.DependencyInjection;
using System.Collections.Concurrent;

namespace Furion.Schedule;

/// <summary>
/// 作业调度工厂默认实现类
/// </summary>
internal sealed partial class SchedulerFactory : ISchedulerFactory, IDisposable
{
    /// <summary>
    /// 服务提供器
    /// </summary>
    private readonly IServiceProvider _serviceProvider;

    /// <summary>
    /// 日志对象
    /// </summary>
    private readonly IScheduleLogger _logger;

    /// <summary>
    /// 长时间运行的后台任务
    /// </summary>
    /// <remarks>实现任务执行状态持久化</remarks>
    private readonly Task _processQueueTask;

    /// <summary>
    /// 作业调度器休眠 Token
    /// </summary>
    /// <remarks>用于取消休眠状态（唤醒）</remarks>
    private CancellationTokenSource _sleepCancellationTokenSource;

    /// <summary>
    /// 作业调度计划集合
    /// </summary>
    private readonly ConcurrentDictionary<string, Scheduler> _schedulers = new();

    /// <summary>
    /// 持久化记录消息队列（线程安全）
    /// </summary>
    private readonly BlockingCollection<PersistenceContext> _persistenceMessageQueue = new(1024);

    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="serviceProvider">服务提供器</param>
    /// <param name="logger">日志对象</param>
    /// <param name="schedulers">作业调度计划集合</param>
    public SchedulerFactory(IServiceProvider serviceProvider
        , IScheduleLogger logger
        , ConcurrentDictionary<string, Scheduler> schedulers)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
        _schedulers = schedulers;

        Persistence = _serviceProvider.GetService<ISchedulerPersistence>();

        if (Persistence != null)
        {
            // 创建长时间运行的后台任务，并将记录消息队列中数据写入持久化中
            _processQueueTask = Task.Factory.StartNew(state => ((SchedulerFactory)state).ProcessQueue()
                , this, TaskCreationOptions.LongRunning);
        }
    }

    /// <summary>
    /// 持久化服务
    /// </summary>
    private ISchedulerPersistence Persistence { get; }

    /// <summary>
    /// 作业调度器初始化
    /// </summary>
    public void Preload()
    {
        // 输出作业调度度初始化日志
        _logger.LogDebug("Schedule Hosted Service is preloading.");

        // 逐条初始化作业调度计划
        foreach (var scheduler in _schedulers.Values)
        {
            // 获取作业调度计划构建器
            var schedulerBuilder = SchedulerBuilder.From(scheduler);

            // 加载持久化数据
            var newSchedulerBuilder = Persistence?.Preload(schedulerBuilder) ?? schedulerBuilder;

            // 更新内存中的作业调度计划
            _ = TryUpdateJob(newSchedulerBuilder, out _);
        }

        // 输出作业调度初始化日志
        _logger.LogDebug("Schedule Hosted Service preload completed.");
    }

    /// <summary>
    /// 查找下一个触发的作业
    /// </summary>
    /// <param name="startAt">起始时间</param>
    /// <returns><see cref="IEnumerable{IScheduler}"/></returns>
    public IEnumerable<IScheduler> GetNextRunJobs(DateTime startAt)
    {
        // 定义静态内部函数用于委托检查
        bool triggerShouldRun(JobTrigger t) => t.InternalShouldRun(startAt);

        // 查找所有符合执行的作业调度计划
        var nextRunSchedulers = _schedulers.Values
                .Where(s => s.JobHandler != null
                    && s.Triggers.Values.Any(triggerShouldRun))
                .Select(s => new Scheduler(s.JobDetail, s.Triggers.Values.Where(triggerShouldRun).ToDictionary(t => t.TriggerId, t => t))
                {
                    Factory = this,
                    JobHandler = s.JobHandler,
                });

        return nextRunSchedulers;
    }

    /// <summary>
    /// 作业调度器进入休眠状态
    /// </summary>
    /// <param name="stoppingToken">取消任务 Token</param>
    /// <returns><see cref="Task"/></returns>
    public async Task SleepAsync(CancellationToken stoppingToken = default)
    {
        // 输出作业调度器进入休眠日志
        _logger.LogDebug("Schedule Hosted Service enters hibernation.");

        // 创建作业调度器任务关联 Token
        _sleepCancellationTokenSource = CancellationTokenSource.CreateLinkedTokenSource(stoppingToken);

        // 监听休眠被取消
        _sleepCancellationTokenSource.Token.Register(() =>
           _logger.LogWarning("Schedule Hosted Service cancels hibernation."));

        // 获取作业调度计划总休眠时间
        var sleepMilliseconds = GetSleepMilliseconds();
        var delay = sleepMilliseconds != null
            ? sleepMilliseconds.Value
            : -1;

        try
        {
            // 进入休眠状态
            await Task.Delay(TimeSpan.FromMilliseconds(delay), _sleepCancellationTokenSource.Token);
        }
        catch { }
    }

    /// <summary>
    /// 取消作业调度器休眠状态（强制唤醒）
    /// </summary>
    public void CancelSleep()
    {
        _sleepCancellationTokenSource?.Cancel(false);
        _sleepCancellationTokenSource = null;
    }

    /// <summary>
    /// 将作业信息运行数据写入持久化
    /// </summary>
    /// <param name="jobDetail">作业信息</param>
    /// <param name="behavior">作业持久化行为</param>
    public void Shorthand(JobDetail jobDetail, PersistenceBehavior behavior = PersistenceBehavior.Updated)
    {
        Shorthand(jobDetail, null, behavior);
    }

    /// <summary>
    /// 将作业触发器运行数据写入持久化
    /// </summary>
    /// <param name="jobDetail">作业信息</param>
    /// <param name="trigger">作业触发器</param>
    /// <param name="behavior">作业持久化行为</param>
    public void Shorthand(JobDetail jobDetail, JobTrigger trigger, PersistenceBehavior behavior = PersistenceBehavior.Updated)
    {
        if (trigger == null) jobDetail.UpdatedTime = DateTime.UtcNow;
        else trigger.UpdatedTime = DateTime.UtcNow;

        // 空检查
        if (Persistence == null) return;

        // 只有队列可持续入队才写入
        if (!_persistenceMessageQueue.IsAddingCompleted)
        {
            try
            {
                // 创建持久化上下文
                var context = trigger == null ?
                    new PersistenceContext(jobDetail, behavior)
                    : new PersistenceTriggerContext(jobDetail, trigger, behavior);

                _persistenceMessageQueue.Add(context);
                return;
            }
            catch (InvalidOperationException) { }
        }
    }

    /// <summary>
    /// 释放非托管资源
    /// </summary>
    public void Dispose()
    {
        // 标记记录消息队列停止写入
        _persistenceMessageQueue.CompleteAdding();

        try
        {
            // 取消作业调度器休眠状态（强制唤醒）
            CancelSleep();

            // 设置 1.5秒的缓冲时间，避免还有消息没有完成持久化
            _processQueueTask?.Wait(1500);
        }
        catch (TaskCanceledException) { }
        catch (AggregateException ex) when (ex.InnerExceptions.Count == 1 && ex.InnerExceptions[0] is TaskCanceledException) { }
    }

    /// <summary>
    /// 获取作业调度计划总休眠时间
    /// </summary>
    /// <returns></returns>
    private double? GetSleepMilliseconds()
    {
        // 空检查
        if (!_schedulers.Any()) return null;

        // 获取当前时间作为检查时间
        var nowTime = DateTime.UtcNow;
        // 采用 DateTimeKind.Unspecified 转换当前时间并忽略毫秒之后部分（用于减少误差）
        var checkTime = new DateTime(nowTime.Year
            , nowTime.Month
            , nowTime.Day
            , nowTime.Hour
            , nowTime.Minute
            , nowTime.Second
            , nowTime.Millisecond);

        // 获取所有作业调度计划下一批执行时间
        var nextRunTimes = _schedulers.Values
            .SelectMany(u => u.Triggers.Values
                .Where(t => t.NextRunTime != null && t.NextRunTime.Value >= checkTime)
                .Select(t => t.NextRunTime.Value));

        // 空检查
        if (!nextRunTimes.Any()) return null;

        // 获取最早触发的时间
        var earliestTriggerTime = nextRunTimes.Min();

        // 计算总休眠时间
        var sleepMilliseconds = (earliestTriggerTime - checkTime).TotalMilliseconds;

        return sleepMilliseconds;
    }

    /// <summary>
    /// 将作业调度计划记录持久化
    /// </summary>
    private void ProcessQueue()
    {
        foreach (var context in _persistenceMessageQueue.GetConsumingEnumerable())
        {
            try
            {
                // 作业触发器持久化
                if (context is PersistenceTriggerContext triggerContext)
                {
                    Persistence.PersistTrigger(triggerContext);
                }
                // 作业信息持久化
                else Persistence.Persist(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Schedule Hosted Service persist failed.");
            }
        }
    }
}