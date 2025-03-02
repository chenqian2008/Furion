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

using System.Reflection;

namespace Furion.Schedule;

/// <summary>
/// 作业调度计划构建器
/// </summary>
[SuppressSniffer]
public sealed class SchedulerBuilder
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="jobBuilder">作业信息构建器</param>
    private SchedulerBuilder(JobBuilder jobBuilder)
    {
        JobBuilder = jobBuilder;
    }

    /// <summary>
    /// 标记作业调度计划持久化行为
    /// </summary>
    internal PersistenceBehavior Behavior { get; set; } = PersistenceBehavior.Updated;

    /// <summary>
    /// 作业信息构建器
    /// </summary>
    internal JobBuilder JobBuilder { get; private set; }

    /// <summary>
    /// 作业触发器构建器集合
    /// </summary>
    internal List<TriggerBuilder> TriggerBuilders { get; private set; } = new();

    /// <summary>
    /// 创建作业调度程序构建器
    /// </summary>
    /// <param name="jobBuilder">作业信息构建器</param>
    /// <param name="triggerBuilders">作业触发器构建器集合</param>
    /// <returns><see cref="SchedulerBuilder"/></returns>
    public static SchedulerBuilder Create(JobBuilder jobBuilder, params TriggerBuilder[] triggerBuilders)
    {
        // 空检查
        if (jobBuilder == null) throw new ArgumentNullException(nameof(jobBuilder));

        // 创建作业调度计划构建器
        var schedulerBuilder = new SchedulerBuilder(jobBuilder);

        // 批量添加触发器
        if (triggerBuilders != null && triggerBuilders.Length > 0)
        {
            schedulerBuilder.TriggerBuilders.AddRange(triggerBuilders);
        }

        // 判断是否扫描 IJob 实现类 [Trigger] 特性触发器
        if (jobBuilder.IncludeAnnotations)
        {
            var triggerAttributes = jobBuilder.RuntimeJobType.GetCustomAttributes<TriggerAttribute>(true);

            foreach (var triggerAttribute in triggerAttributes)
            {
                // 创建作业触发器并添加到当前作业触发器构建器中
                var triggerBuilder = TriggerBuilder.Create(triggerAttribute.RuntimeTriggerType)
                    .WithArgs(triggerAttribute.RuntimeTriggerArgs)
                    .SetTriggerId(triggerAttribute.TriggerId)
                    .SetDescription(triggerAttribute.Description)
                    .SetMaxNumberOfRuns(triggerAttribute.MaxNumberOfRuns)
                    .SetMaxNumberOfErrors(triggerAttribute.MaxNumberOfErrors)
                    .SetNumRetries(triggerAttribute.NumRetries)
                    .SetRetryTimeout(triggerAttribute.RetryTimeout)
                    .SetLogExecution(triggerAttribute.LogExecution)
                    .SetStartTime(triggerAttribute.RuntimeStartTime)
                    .SetEndTime(triggerAttribute.RuntimeEndTime)
                    .SetStartNow(triggerAttribute.StartNow);

                schedulerBuilder.TriggerBuilders.Add(triggerBuilder);
            }
        }

        return schedulerBuilder;
    }

    /// <summary>
    /// 克隆作业调度计划构建器（被标记为新增）
    /// </summary>
    /// <param name="fromSchedulerBuilder">被克隆的作业调度计划构建器</param>
    /// <returns><see cref="ScheduleOptionsBuilder"/></returns>
    public static SchedulerBuilder Clone(SchedulerBuilder fromSchedulerBuilder)
    {
        // 空检查
        if (fromSchedulerBuilder == null) throw new ArgumentNullException(nameof(fromSchedulerBuilder));

        return new SchedulerBuilder(JobBuilder.Clone(fromSchedulerBuilder.JobBuilder))
        {
            TriggerBuilders = fromSchedulerBuilder.TriggerBuilders.Select(t => TriggerBuilder.Clone(t)).ToList(),
            Behavior = PersistenceBehavior.Appended
        };
    }

    /// <summary>
    /// 标记作业调度计划为新增行为
    /// </summary>
    /// <returns></returns>
    public SchedulerBuilder Appended()
    {
        Behavior = PersistenceBehavior.Appended;
        return this;
    }

    /// <summary>
    /// 标记作业调度计划为更新行为
    /// </summary>
    /// <returns></returns>
    public SchedulerBuilder Updated()
    {
        Behavior = PersistenceBehavior.Updated;
        return this;
    }

    /// <summary>
    /// 标记作业调度计划为删除行为
    /// </summary>
    /// <returns></returns>
    public SchedulerBuilder Removed()
    {
        Behavior = PersistenceBehavior.Removed;
        return this;
    }

    /// <summary>
    /// 获取作业信息构建器
    /// </summary>
    /// <returns><see cref="JobBuilder"/></returns>
    public JobBuilder GetDetail()
    {
        return JobBuilder;
    }

    /// <summary>
    /// 获取作业触发器构建器集合
    /// </summary>
    /// <returns><see cref="List{TriggerBuilder}"/></returns>
    public List<TriggerBuilder> GetTriggers()
    {
        return TriggerBuilders;
    }

    /// <summary>
    /// 获取作业触发器构建器
    /// </summary>
    /// <returns><see cref="TriggerBuilder"/></returns>
    public TriggerBuilder GetTrigger(string triggerId)
    {
        // 空检查
        if (string.IsNullOrWhiteSpace(triggerId)) throw new ArgumentNullException(nameof(triggerId));

        return TriggerBuilders.SingleOrDefault(t => t.TriggerId == triggerId);
    }

    /// <summary>
    /// 将 <see cref="Scheduler"/> 转换成 <see cref="SchedulerBuilder"/>
    /// </summary>
    /// <param name="scheduler">作业调度计划</param>
    /// <returns><see cref="SchedulerBuilder"/></returns>
    internal static SchedulerBuilder From(Scheduler scheduler)
    {
        return new SchedulerBuilder(JobBuilder.From(scheduler.JobDetail))
        {
            TriggerBuilders = scheduler.Triggers.Select(t => TriggerBuilder.From(t.Value)).ToList()
        };
    }

    /// <summary>
    /// 构建 <see cref="Scheduler"/> 对象
    /// </summary>
    /// <param name="total">当前作业调度计划总量</param>
    /// <returns><see cref="Scheduler"/></returns>
    internal Scheduler Build(int total)
    {
        // 配置默认 JobId
        if (string.IsNullOrWhiteSpace(JobBuilder.JobId))
        {
            JobBuilder.SetJobId($"job{total + 1}");
        }

        // 构建作业信息和作业触发器
        var jobDetail = JobBuilder.Build();

        // 构建作业触发器
        var triggers = new Dictionary<string, JobTrigger>();

        // 遍历作业触发器构建器集合
        for (var i = 0; i < TriggerBuilders.Count; i++)
        {
            var triggerBuilder = TriggerBuilders[i];

            // 配置默认 TriggerId
            if (string.IsNullOrWhiteSpace(triggerBuilder.TriggerId))
            {
                triggerBuilder.SetTriggerId($"{jobDetail.JobId}_trigger{i + 1}");
            }

            var trigger = triggerBuilder.Build(jobDetail.JobId);
            var succeed = triggers.TryAdd(trigger.TriggerId, trigger);

            // 作业触发器 Id 唯一检查
            if (!succeed) throw new InvalidOperationException($"The TriggerId of <{trigger.TriggerId}> already exists.");
        }

        // 创建作业调度计划
        return new Scheduler(jobDetail, triggers);
    }
}