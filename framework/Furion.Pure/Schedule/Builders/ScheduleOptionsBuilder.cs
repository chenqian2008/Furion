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
using Microsoft.Extensions.DependencyInjection.Extensions;
using System.Collections.Concurrent;

namespace Furion.Schedule;

/// <summary>
/// 作业调度配置选项构建器
/// </summary>
[SuppressSniffer]
public sealed class ScheduleOptionsBuilder
{
    /// <summary>
    /// 作业调度计划构建器集合
    /// </summary>
    private readonly List<SchedulerBuilder> _schedulerBuilders = new();

    /// <summary>
    /// 作业处理程序监视器
    /// </summary>
    private Type _jobHandlerMonitor;

    /// <summary>
    /// 作业处理程序执行器
    /// </summary>
    private Type _jobHandlerExecutor;

    /// <summary>
    /// 作业调度持久化器
    /// </summary>
    private Type _schedulerPersistence;

    /// <summary>
    /// 是否使用 UTC 时间戳，默认 false
    /// </summary>
    public bool UseUtcTimestamp { get; set; } = false;

    /// <summary>
    /// 未察觉任务异常事件处理程序
    /// </summary>
    public EventHandler<UnobservedTaskExceptionEventArgs> UnobservedTaskExceptionHandler { get; set; }

    /// <summary>
    /// 是否启用日志记录
    /// </summary>
    public bool LogEnabled { get; set; } = true;

    /// <summary>
    /// 添加作业
    /// </summary>
    /// <param name="schedulerBuilder">作业调度程序构建器</param>
    /// <returns><see cref="ScheduleOptionsBuilder"/></returns>
    public ScheduleOptionsBuilder AddJob(SchedulerBuilder schedulerBuilder)
    {
        // 空检查
        if (schedulerBuilder == null) throw new ArgumentNullException(nameof(schedulerBuilder));

        // 将作业调度计划构建器添加到集合中
        _schedulerBuilders.Add(schedulerBuilder);

        return this;
    }

    /// <summary>
    /// 添加作业
    /// </summary>
    /// <param name="jobBuilder">作业信息构建器</param>
    /// <param name="triggerBuilders">作业触发器构建器集合</param>
    /// <returns><see cref="ScheduleOptionsBuilder"/></returns>
    public ScheduleOptionsBuilder AddJob(JobBuilder jobBuilder, params TriggerBuilder[] triggerBuilders)
    {
        return AddJob(SchedulerBuilder.Create(jobBuilder, triggerBuilders));
    }

    /// <summary>
    /// 添加作业
    /// </summary>
    /// <typeparam name="TJob"><see cref="IJob"/> 实现类型</typeparam>
    /// <param name="triggerBuilders">作业触发器构建器集合</param>
    /// <returns><see cref="ScheduleOptionsBuilder"/></returns>
    public ScheduleOptionsBuilder AddJob<TJob>(params TriggerBuilder[] triggerBuilders)
         where TJob : class, IJob
    {
        return AddJob(SchedulerBuilder.Create(JobBuilder.Create<TJob>()
            , triggerBuilders));
    }

    /// <summary>
    /// 添加作业
    /// </summary>
    /// <typeparam name="TJob"><see cref="IJob"/> 实现类型</typeparam>
    /// <param name="jobId">作业 Id</param>
    /// <param name="triggerBuilders">作业触发器构建器集合</param>
    /// <returns><see cref="ScheduleOptionsBuilder"/></returns>
    public ScheduleOptionsBuilder AddJob<TJob>(string jobId, params TriggerBuilder[] triggerBuilders)
         where TJob : class, IJob
    {
        return AddJob(SchedulerBuilder.Create(JobBuilder.Create<TJob>().SetJobId(jobId)
            , triggerBuilders));
    }

    /// <summary>
    /// 添加作业
    /// </summary>
    /// <typeparam name="TJob"><see cref="IJob"/> 实现类型</typeparam>
    /// <param name="jobId">作业 Id</param>
    /// <param name="concurrent">是否采用并发执行</param>
    /// <param name="triggerBuilders">作业触发器构建器集合</param>
    /// <returns><see cref="ScheduleOptionsBuilder"/></returns>
    public ScheduleOptionsBuilder AddJob<TJob>(string jobId, bool concurrent, params TriggerBuilder[] triggerBuilders)
         where TJob : class, IJob
    {
        return AddJob(SchedulerBuilder.Create(JobBuilder.Create<TJob>().SetJobId(jobId).SetConcurrent(concurrent)
            , triggerBuilders));
    }

    /// <summary>
    /// 注册作业处理程序监视器
    /// </summary>
    /// <typeparam name="TJobHandlerMonitor">实现自 <see cref="IJobHandlerMonitor"/></typeparam>
    /// <returns><see cref="ScheduleOptionsBuilder"/> 实例</returns>
    public ScheduleOptionsBuilder AddMonitor<TJobHandlerMonitor>()
        where TJobHandlerMonitor : class, IJobHandlerMonitor
    {
        _jobHandlerMonitor = typeof(TJobHandlerMonitor);
        return this;
    }

    /// <summary>
    /// 注册作业处理程序执行器
    /// </summary>
    /// <typeparam name="TJobHandlerExecutor">实现自 <see cref="IJobHandlerExecutor"/></typeparam>
    /// <returns><see cref="ScheduleOptionsBuilder"/> 实例</returns>
    public ScheduleOptionsBuilder AddExecutor<TJobHandlerExecutor>()
        where TJobHandlerExecutor : class, IJobHandlerExecutor
    {
        _jobHandlerExecutor = typeof(TJobHandlerExecutor);
        return this;
    }

    /// <summary>
    /// 注册作业调度持久化器
    /// </summary>
    /// <typeparam name="TSchedulerPersistence">实现自 <see cref="ISchedulerPersistence"/></typeparam>
    /// <returns><see cref="ScheduleOptionsBuilder"/> 实例</returns>
    public ScheduleOptionsBuilder AddPersistence<TSchedulerPersistence>()
        where TSchedulerPersistence : class, ISchedulerPersistence
    {
        _schedulerPersistence = typeof(TSchedulerPersistence);
        return this;
    }

    /// <summary>
    /// 构建配置选项
    /// </summary>
    /// <param name="services">服务集合对象</param>
    internal ConcurrentDictionary<string, Scheduler> Build(IServiceCollection services)
    {
        var schedulers = new ConcurrentDictionary<string, Scheduler>();

        // 遍历作业信息构建器集合
        foreach (var schedulerBuilder in _schedulerBuilders)
        {
            // 构建作业调度计划并添加到集合中
            var scheduler = schedulerBuilder.Build(_schedulerBuilders.Count);
            var succeed = schedulers.TryAdd(scheduler.JobId, scheduler);

            // 检查 作业 Id 重复
            if (!succeed) throw new InvalidOperationException($"The JobId of <{scheduler.JobId}> already exists.");

            // 注册作业处理程序为单例
            var jobType = scheduler.JobDetail.RuntimeJobType;
            services.TryAddSingleton(jobType, jobType);
        }

        // 注册作业监视器
        if (_jobHandlerMonitor != default)
        {
            services.AddSingleton(typeof(IJobHandlerMonitor), _jobHandlerMonitor);
        }

        // 注册作业执行器
        if (_jobHandlerExecutor != default)
        {
            services.AddSingleton(typeof(IJobHandlerExecutor), _jobHandlerExecutor);
        }

        // 注册作业调度持久化器
        if (_schedulerPersistence != default)
        {
            services.AddSingleton(typeof(ISchedulerPersistence), _schedulerPersistence);
        }

        return schedulers;
    }
}