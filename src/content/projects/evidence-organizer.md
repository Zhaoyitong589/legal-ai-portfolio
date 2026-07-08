---
title: "证据时间轴整理原型：本地化证据材料整理与 Word 报告生成"
eyebrow: "DEMO 02"
summary: "面向律师处理涉隐私案件材料时的证据图片整理需求，当前版本是本地化原型：接收图片 ZIP 与 OCR 文本，提取时间信息、建议排序，并生成可由律师复核的 Word 报告、Excel 底稿与处理日志。"
oneLine: "上传虚构证据图片与 OCR 文本，自动整理时间线并生成可复核的 Word 报告。"
statuses: ["本地原型"]
featured: true
order: 2
tags: ["证据整理", "OCR", "本地化原型", "Word 报告"]
cover: "images/projects/evidence-tool-ui-redacted.png"
coverAlt: "证据时间轴整理原型的工具界面"
coverCaption: "工具界面：上传图片 ZIP 包与 Umi-OCR 结果，提取时间并生成待核对材料。截图已脱敏。"
screenshots:
  - src: "images/projects/evidence-timeline-output-redacted.png"
    alt: "经过脱敏处理的 Word 证据时间轴整理表输出示例"
    caption: "输出结果：Word 证据时间轴整理表。测试数据已脱敏。"
updatedAt: "2026-07-07"
externalUrl: "https://legal-evidence-timeline-tool.onrender.com"
sourceUrl: "https://github.com/Zhaoyitong589/legal-evidence-timeline-tool"
riskNote: "本工具为流程演示与辅助分析原型，不构成法律意见。所有输出结果均需由专业人员结合原始材料、现行法律依据和案件事实进行复核。"
projectDetails:
  painPoint: "律师处理大量聊天截图、票据、照片等证据材料时，常需要先按时间顺序整理材料；人工逐张识别日期、命名和排序耗时，且容易遗漏。"
  targetUsers: "需要整理案件证据材料的律师、律师助理、法务或法律服务团队。"
  inputs: "证据图片 ZIP 包、Umi-OCR 导出的 TXT 文本、文件名与可选备注信息。"
  outputs: "按时间建议排序的 Word 报告、Excel 复核底稿、处理日志和异常提示。"
  currentForm: "本地化原型，同时保留脱敏网页演示入口；更适合处理涉及隐私的案件材料。"
  aiRole: "AI/自动化主要参与 OCR 结果解析、时间信息抽取、排序建议和报告结构生成。"
  humanReviewBoundary: "律师必须核对原始图片、OCR 文本、时间识别结果、排序逻辑和材料与案件事实的对应关系。"
  limitations: "OCR 识别、模糊日期、截图上下文和材料真实性判断均不能完全自动化。"
  nextIteration: "后续可拓展为本地打包版、律所内网部署版、脱敏网页演示版，并增加异常日期标注和人工批注功能。"
  capabilityProof: "证明我能把律师证据整理任务拆成隐私保护、输入规范、自动排序、报告生成和人工复核几个可交付节点。"
demoWalkthrough:
  watchDemo: "查看从虚构聊天记录、打卡截图和票据图片上传，到 OCR 解析、时间抽取、排序建议和 Word 报告生成的流程。"
  sampleInput: "虚构聊天截图、虚构打卡截图、模拟票据图片、Umi-OCR 示例文本和测试 ZIP 包。"
  sampleOutput: "样例 Word 时间轴报告、Excel 复核底稿、异常日期提示和处理日志。"
  currentStatus: "本地化原型；作品集仅展示脱敏或虚构样例，不展示真实案件材料。"
  privacyNote: "真实案件材料涉及保密义务，因此作品集仅展示虚构聊天记录、打卡截图和样例 Word 报告。当前工具重点展示从图片材料到时间轴报告的处理流程。"
demoMedia:
  poster: "images/projects/evidence-tool-ui-redacted.png"
  previewAnimation: "images/projects/evidence-demo-preview.svg"
---

## 项目背景

证据时间轴整理不是单纯的“图片排序”问题。真实案件材料往往包含聊天截图、转账记录、票据、照片和扫描件，材料中有隐私信息，也有 OCR 识别错误、日期不完整、上下文缺失等问题。

这个原型的定位是：在不替代律师判断的前提下，先把重复性整理工作工具化，让律师更快进入事实核对和争点分析。

## 可视化演示

真实案件材料涉及保密义务，因此作品集仅展示虚构聊天记录、打卡截图和样例 Word 报告。当前工具重点展示从图片材料到时间轴报告的处理流程：上传虚构图片材料和 OCR 文本，系统提取候选时间，生成排序建议，再导出 Word 报告、Excel 复核底稿和处理日志。

## 当前形态

当前版本是本地化证据材料整理原型，适合处理涉及隐私的案件材料。网页版本主要用于脱敏演示和求职展示。真实案件材料更适合在本地或律所内网环境中处理。

## 后续部署方向

1. 本地打包版：供个人律师或律师助理在本机运行，减少敏感材料外传。
2. 律所内网部署版：适合团队统一使用，并结合权限控制、日志留痕和数据保留规则。
3. 脱敏网页演示版：用于公开展示流程和交互，不承载真实案件材料。

## 这个项目证明了什么

这个项目证明的不是“AI 可以自动处理证据”，而是我能识别法律工作流中的低风险辅助节点：材料接收、OCR 解析、时间抽取、排序建议、Word 报告生成和人工复核底稿。

## 免责声明

本工具为流程演示与辅助分析原型，不构成法律意见。所有输出结果均需由专业人员结合原始材料、现行法律依据和案件事实进行复核。
