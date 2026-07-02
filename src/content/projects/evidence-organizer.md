---
title: "律师证据图片时间轴整理工具"
eyebrow: "DEMO 02"
summary: "已完成独立项目仓库：静态页面用于展示工作流程，本地 Flask 工具可处理图片 ZIP 与 Umi-OCR 结果，提取时间、建议排序，并生成供律师复核的 Word、Excel 与处理日志。"
statuses: ["本地原型", "暂未公开部署"]
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
updatedAt: "2026-07-01"
riskNote: "OCR 识别和自动排序可能存在错误，结果仅用于证据整理辅助，最终需要律师人工核对。"
---

## 项目背景

律师处理大量证据图片时，往往需要结合 OCR 结果逐张识别日期，再按时间顺序整理材料。该工具尝试把图片、OCR 文本、时间提取、排序和结果导出连接成一个可复核的辅助流程。

## 当前进展

已完成独立项目仓库 `legal-evidence-timeline-tool`，当前使用 `main` 分支。仓库包含两个明确分离的部分：

- **静态作品展示页**：由 `index.html`、`style.css`、`script.js`、`assets/` 和 `.nojekyll` 组成，用于展示项目背景、处理流程、输出示例与法律边界；
- **本地 Flask 工具**：支持真实接收图片 ZIP 与 Umi-OCR TXT，完成安全解压、文件匹配、时间提取、建议排序和结果导出。

静态展示页已检查桌面端、390px 移动端、导航菜单和静态资源。本地仓库目前尚未推送 GitHub，因此没有公开的 GitHub Pages 地址，网站暂不显示“访问项目”按钮。

## 解决的问题

- 接收图片 ZIP 包和 Umi-OCR 导出的识别结果；
- 自动解析 OCR 文本并提取时间信息；
- 按识别出的时间对图片进行排序；
- 生成可供律师人工核对的 Word、Excel 与处理日志。

## 我的工作

需求拆解、工作流设计、OCR 结果处理逻辑、时间线排序逻辑、输出格式设计、AI 辅助原型开发。

## 方法与实现

工具先为每次任务生成独立任务编号，保存 ZIP 和 TXT 后进行安全解压，再按文件名匹配图片与 OCR 记录。系统从文本中提取候选时间，将明确时间按先后排序，并把模糊时间或无时间记录后置，最终生成 Word 证据展示材料、Excel 人工复核底稿和 `process_log.txt`。

静态展示页与本地处理工具彼此分离：未来部署到 GitHub Pages 的页面只承担项目说明，不上传或处理用户文件；需要实际生成材料时，仍须在本地运行 Flask 工具。

## 风险提示

OCR 识别和自动排序可能存在错误，结果仅用于证据整理辅助，最终需要律师人工核对。

## 后续计划

1. 完成本地仓库首次提交并推送 GitHub；
2. 部署静态展示页并补充公开访问链接；
3. 使用脱敏样本继续测试时间提取、排序和异常处理逻辑；
4. 继续完善本地工具的数据清理、权限控制和隐私安全说明。
