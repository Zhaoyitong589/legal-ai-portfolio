---
title: "跨境交易风险识别清单原型"
eyebrow: "EARLY EXPLORATION"
summary: "面对第一次接触的跨境交易，我尝试借助工具把非结构化问题转换成 checklist；后来又主动删除超出本人专业范围的判断，只保留事实整理、基础合同问题和人工升级路径。"
oneLine: "将陌生跨境交易拆成逐项确认的问题，而不是让工具替代专业判断。"
statuses: ["早期探索"]
featured: false
order: 9
tags: ["Question Checklist", "Issue Spotting", "人工升级"]
categories: ["in-house-legal", "legal-tech", "cross-border", "legal-operations"]
cover: "images/projects/risk-screening.svg"
externalUrl: "https://yangkewei2001-collab.github.io/trade-risk-screening-demo/"
updatedAt: "2026-07-07"
riskNote: "本工具为流程演示与辅助分析原型，不构成法律意见。所有输出结果均需由专业人员结合原始材料、现行法律依据和案件事实进行复核。"
projectDetails:
  painPoint: "第一次接触制造企业直接出口时，合同、付款、交付、保密和验收信息分散且陌生；真正需要的是一份可逐项确认的基础问题清单，而不是看似全面的专业判断系统。"
  targetUsers: "需要整理陌生跨境交易事实、识别基础合同问题并安排后续复核的业务或法务人员。"
  inputs: "交易主体、产品和金额、付款节点、基础交付与单证、保密、争议解决及合同层面验收信息。"
  outputs: "中英文 question checklist、缺失信息、建议复核人员和下一步行动。"
  currentForm: "经过主动瘦身的早期探索原型，只保留本人能够解释的六个基础模块。"
  aiRole: "AI 用于扩展初始问题集和整理表达；最终保留范围由本人根据真实经验与专业边界重新判断。"
  humanReviewBoundary: "工具不判断出口管制、制裁、产品技术属性、最终用途、技术标准、FAT / SAT 技术指标、海关分类或目的国特殊监管要求；这些事项只标记并升级至 Legal、Trade Compliance、Engineering 或 Logistics。"
  limitations: "Demo 不是风险评级系统，不判断交易是否合法，不提供专业贸易合规、工程、海关或特定法域法律意见。"
  nextIteration: "继续用真实但脱敏的合同场景检验每个问题是否必要、可解释，并优先删除无法清楚说明用途的字段。"
  capabilityProof: "证明我能面对陌生业务快速建立初步框架、把问题转换成 checklist，并随着经验增长主动缩小工具和自身判断边界。"
demoWalkthrough:
  watchDemo: "查看虚构变压器交易如何被拆成六组基础问题，并生成缺失信息、复核人员和下一步行动。"
  sampleInput: "虚构中国制造企业与欧洲 B2B 买方、定制变压器、分阶段付款、保密、海运交付、争议解决和合同验收节点。"
  sampleOutput: "CHECK、CLARIFY、REVIEW 与 SPECIALIST REVIEW 状态，以及对应的人工复核路径。"
  currentStatus: "在线早期探索 Demo；已从风险筛查系统缩减为本人能够解释的 question checklist。"
  privacyNote: "使用虚构合同条款展示付款风险、争议解决条款、保密条款和交付条款的风险提示流程，不展示真实客户或真实交易材料。"
demoMedia:
  poster: "images/projects/risk-screening.svg"
  previewAnimation: "images/projects/risk-demo-preview.svg"
---

## 项目背景

第一次接触制造企业直接出口时，我希望用一个工具帮助自己检查可能遗漏的问题。早期版本逐渐加入许多超出本人专业背景的贸易合规和技术内容；现在这个 Demo 只保留我能够解释的交易、付款、交付、保密、争议解决和合同验收问题。

## 可视化演示

演示使用虚构合同条款展示付款风险、争议解决条款、保密条款和交付条款的风险提示流程。样例输入不包含真实客户、真实合同、真实交易对手或真实报价信息，只用于展示问卷结构、风险提示和报告生成逻辑。

## 设计思路

原型将问题转换成 Question → Missing information → Who should review → Next action。专业贸易合规、工程和海关事项只触发 escalation，不由工具给出结论。

## 这个项目证明了什么

这个项目证明我能面对陌生业务快速建立初步框架，并在获得更多真实经验后主动修正工具范围。它不证明我具备出口管制、制裁、工程或海关分类专业能力。

## 免责声明

本工具为流程演示与辅助分析原型，不构成法律意见。所有输出结果均需由专业人员结合原始材料、现行法律依据和案件事实进行复核。
