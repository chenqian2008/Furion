﻿// -----------------------------------------------------------------------------
// 让 .NET 开发更简单，更通用，更流行。
// Copyright © 2020-2021 Furion, 百小僧, Baiqian Co.,Ltd.
//
// 框架名称：Furion
// 框架作者：百小僧
// 框架版本：2.7.9
// 源码地址：Gitee： https://gitee.com/dotnetchina/Furion
//          Github：https://github.com/monksoul/Furion
// 开源协议：Apache-2.0（https://gitee.com/dotnetchina/Furion/blob/master/LICENSE）
// -----------------------------------------------------------------------------

using Microsoft.AspNetCore.Http;

namespace Furion.UrlRewriter
{
    /// <summary>
    /// URL转发规则匹配结果
    /// </summary>
    internal sealed class UrlRewriterMatchResult
    {
        /// <summary>
        /// 是否成功匹配到转发规则
        /// </summary>
        public bool IsMatch { get; set; }

        /// <summary>
        /// 匹配到的规则路由前缀
        /// </summary>
        public PathString Prefix { get; set; }

        /// <summary>
        /// 转发规则中的目的主机地址
        /// </summary>
        public string TargetHost { get; set; }
    }
}