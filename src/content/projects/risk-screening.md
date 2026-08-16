---
title: "电力设备出口风险识别原型"
eyebrow: "EARLY EXPLORATION"
summary: "早期尝试将电力设备出口交易中的合同、付款、物流、出口管制、制裁和技术验收等风险入口进行结构化，用于探索 Legal Tech 在交易前 issue spotting 与 escalation 中的可能形式。"
oneLine: "将复杂出口交易拆成结构化风险入口，探索工具如何支持事实收集、问题识别和专业升级。"
statuses: ["早期探索"]
featured: false
order: 9
tags: ["Issue Spotting", "结构化表单", "人工升级"]
categories: ["in-house-legal", "legal-tech", "cross-border", "legal-operations"]
cover: "images/projects/risk-screening.svg"
externalUrl: "https://yangkewei2001-collab.github.io/trade-risk-screening-demo/"
updatedAt: "2026-07-07"
riskNote: "本工具为流程演示与辅助分析原型，不构成法律意见。所有输出结果均需由专业人员结合原始材料、现行法律依据和案件事实进行复核。"
projectDetails:
  painPoint: "复杂出口交易的风险入口分散在合同、付款、物流、技术材料与专业合规事项中；早期探索的重点是如何先把问题结构化，而不是由工具直接判断。"
  targetUsers: "外贸业务人员、法务、合规助理，以及需要进行交易前风险初筛的法律服务团队。"
  inputs: "交易国家/地区、产品类型、交易对手、付款安排、贸易术语、验收安排、合同争议解决条款等问卷信息。"
  outputs: "中英文 issue-spotting 报告、缺失事实提示、建议复核人员和后续行动清单。"
  currentForm: "在线早期探索原型，用于展示事实收集、问题识别和 escalation 结构。"
  aiRole: "AI 辅助梳理风险维度、组织中英文报告表达，并将问卷答案转化为结构化提示。"
  humanReviewBoundary: "合同商业事项由 Legal 与业务协同复核；制裁和出口管制需 Trade Compliance / Legal 依据最新官方来源核验；产品属性、技术标准和 FAT / SAT 需 Technical / Quality 确认。"
  limitations: "Demo 不连接实时制裁数据库和出口管制数据库，不能替代正式尽调或律师审查。"
  nextIteration: "增加依据版本标注、风险分级规则、更多设备类型测试场景和人工复核清单导出。"
  capabilityProof: "证明我能在不熟悉复杂领域时结构化风险入口、设计事实收集表单，并识别何时需要交给正确的专业人员。"
demoWalkthrough:
  watchDemo: "查看虚构电力设备出口交易从合同条款录入，到风险维度提示和中英文报告生成的流程。"
  sampleInput: "虚构买卖双方、模拟付款条款、争议解决条款、保密条款、交付条款和验收安排。"
  sampleOutput: "付款风险、争议解决条款、保密条款和交付条款的风险提示，以及后续人工核查清单。"
  currentStatus: "在线网页 Demo；用于展示交易前风险初筛的信息结构和报告逻辑。"
  privacyNote: "使用虚构合同条款展示付款风险、争议解决条款、保密条款和交付条款的风险提示流程，不展示真实客户或真实交易材料。"
demoMedia:
  poster: "images/projects/risk-screening.svg"
  previewAnimation: "images/projects/risk-demo-preview.svg"
---

## 项目背景

电力设备出口交易会同时涉及交易结构、出口管制、制裁筛查、付款安排、贸易术语、技术验收和争议解决等问题。这个 Demo 以变压器、电力设备出口为具体场景，尝试把分散的风险点转化为可填写、可检查的初筛流程。

## 可视化演示

演示使用虚构合同条款展示付款风险、争议解决条款、保密条款和交付条款的风险提示流程。样例输入不包含真实客户、真实合同、真实交易对手或真实报价信息，只用于展示问卷结构、风险提示和报告生成逻辑。

## 设计思路

原型不追求替代合规数据库或律师审查，而是帮助使用者在交易前发现需要进一步核查的问题。它通过结构化问卷收集交易信息，再按照预设风险维度生成中英文初筛报告。

## 这个项目证明了什么

这个项目证明我能把外贸场景中的法律与合规问题转化为更容易被业务人员理解的输入字段、风险提示和复核清单。它的重点不是“自动给结论”，而是让风险更早被看见、被记录、被交给专业人员复核。

## 免责声明

本工具为流程演示与辅助分析原型，不构成法律意见。所有输出结果均需由专业人员结合原始材料、现行法律依据和案件事实进行复核。
