---
title: "律师证据图片时间轴整理工具"
eyebrow: "DEMO 02"
summary: "已上线：静态展示页部署在 GitHub Pages，本地 Flask 工具可处理图片 ZIP 与 Umi-OCR 结果，提取时间、建议排序，并生成供律师复核的 Word、Excel 与处理日志。"
statuses: ["已上线"]
featured: true
order: 2
tags: ["证据整理", "OCR", "Word / Excel"]
cover: "images/projects/evidence-tool-ui-redacted.png"
coverAlt: "律师证据图片时间轴整理工具的本地原型界面"
coverCaption: "工具界面：上传图片 ZIP 包与 Umi-OCR 结果，提取时间并生成待核对材料"
screenshots:
  - src: "images/projects/evidence-timeline-output-redacted.png"
    alt: "经过脱敏处理的 Word 证据时间轴整理表输出示例"
    caption: "输出结果：Word 证据时间轴整理表（测试数据，敏感内容已遮挡）"
updatedAt: "2026-07-03"
externalUrl: "https://Zhaoyitong589.github.io/legal-evidence-timeline-tool/"
sourceUrl: "https://github.com/Zhaoyitong589/legal-evidence-timeline-tool"
riskNote: "OCR 识别和自动排序可能存在错误，结果仅用于证据整理辅助，最终需要律师人工核对。"
---

## 项目背景

律师处理大量证据图片时，往往需要结合 OCR 结果逐张识别日期，再按时间顺序整理材料。该工具尝试把图片、OCR 文本、时间提取、排序和结果导出连接成一个可复核的辅助流程。

## 当前进展

已完成独立项目仓库 `legal-evidence-timeline-tool` 并部署至 GitHub Pages：

- **在线展示页**：https://Zhaoyitong589.github.io/legal-evidence-timeline-tool/ 包含项目背景、处理流程、输出示例与使用边界；
- **本地 Flask 工具**：支持真实接收图片 ZIP 与 Umi-OCR TXT，完成安全解压、文件匹配、时间提取、建议排序和结果导出；
- **源代码**：https://github.com/Zhaoyitong589/legal-evidence-timeline-tool

## 解决的问题

- 接收图片 ZIP 包和 Umi-OCR 导出的识别结果；
- 自动解析 OCR 文本并提取时间信息；
- 按识别出的时间对图片进行排序；
- 生成可供律师人工核对的 Word、Excel 与处理日志。

## 我的工作

需求拆解、工作流设计、OCR 结果处理逻辑、时间线排序逻辑、输出格式设计、AI 辅助原型开发。

## 方法与实现

工具先为每次任务生成独立任务编号，保存 ZIP 和 TXT 后进行安全解压，再按文件名匹配图片与 OCR 记录。系统从文本中提取候选时间，将明确时间按先后排序，并把模糊时间或无时间记录后置，最终生成 Word 证据展示材料、Excel 人工复核底稿和 `process_log.txt`。

## 风险提示

OCR 识别和自动排序可能存在错误，结果仅用于证据整理辅助，最终需要律师人工核对。

## 后续计划

1. 使用脱敏样本继续测试时间提取、排序和异常处理逻辑；
2. 完善本地工具的数据清理、权限控制和隐私安全说明；
3. 探索将文件处理部分也迁移到受控环境的可能性。
