# 法律 AI 实践档案

赵怡彤的个人法律 AI 作品集，用于展示法学训练、法律实务观察、工具原型、文章与培训分享。网站强调法律 AI 在真实场景中的可靠落地、人工复核、风险控制与流程治理。

当前公开地址：[https://legal-ai-portfolio.vercel.app/](https://legal-ai-portfolio.vercel.app/)

## 当前版本

**v1.0：法律 AI 个人作品集初版**

当前项目：

- 电力设备出口法律与合规风险初筛 Demo
- 律师证据图片时间轴整理工具
- 劳动工时与加班费核算工具

当前用途：

- 作品集展示
- 实习、合作与培训介绍
- 公众号或个人主页链接承接

完整版本记录见 [CHANGELOG.md](CHANGELOG.md)。

## 技术栈

- [Astro](https://astro.build/) 7
- TypeScript
- Astro Content Collections
- Markdown 内容文件
- 原生 HTML / CSS
- 纯静态输出，无数据库、Serverless Function 或复杂后端

项目以可迁移的静态站点为目标，可部署到 Vercel、Netlify、Cloudflare Pages 和 GitHub Pages。

## 环境要求

- Node.js 22.12 或更高版本
- npm

建议优先使用 Node.js 22 LTS，并提交 `package-lock.json` 以保证依赖安装可复现。

## 本地运行

```bash
npm install
npm run dev
```

根据终端提示打开本地地址，默认通常为 `http://localhost:4321/`。

Windows PowerShell 如果禁止执行 `npm.ps1`，使用：

```powershell
npm.cmd install
npm.cmd run dev
```

## 检查与构建

提交或部署前运行：

```bash
npm run check
npm run build
npm run preview
```

- `npm run check`：检查 Astro 与 TypeScript。
- `npm run build`：生成生产静态文件到 `dist/`。
- `npm run preview`：本地预览生产构建。
- `npm start`：等同于开发模式，便于部分托管环境识别。

## 内容维护

### 新增项目

复制 `src/content/projects/` 中任一 Markdown 文件并修改字段。文件名会成为项目详情页路径：

```text
src/content/projects/contract-review.md
→ /projects/contract-review/
```

项目截图放入 `public/images/projects/`。`cover` 与 `screenshots.src` 使用不以 `/` 开头的相对路径。尚未公开部署的项目不要设置 `externalUrl`。

### 新增文章

复制 `src/content/writing/ai-hallucination.md`：

- 站内全文：直接在 Markdown 正文中写作。
- 外部文章：设置 `externalUrl`。
- 同步公众号后：设置 `wechatUrl`。
- 暂不公开：设置 `draft: true`。

### 新增培训或分享

复制 `src/content/talks/` 中任一 Markdown 文件。照片放入 `public/images/talks/`，发布前确认肖像授权与信息脱敏。

内容字段由 `src/content.config.ts` 校验；字段缺失或格式错误会在构建阶段提示。

## 项目结构

```text
.
├─ .github/workflows/      GitHub Pages 自动部署
├─ public/                 不经处理的公开静态资源
├─ src/
│  ├─ assets/              由 Astro 优化的图片
│  ├─ components/          可复用组件
│  ├─ content/
│  │  ├─ projects/         项目 Markdown
│  │  ├─ writing/          文章 Markdown
│  │  └─ talks/            培训与分享 Markdown
│  ├─ layouts/             页面布局
│  ├─ lib/site.ts          站点元信息与基础路径助手
│  ├─ pages/               页面与动态路由
│  └─ styles/              全局样式
├─ astro.config.mjs        Astro 静态构建与路径配置
├─ netlify.toml            Netlify 构建配置
├─ vercel.json             Vercel 构建配置
└─ package.json            脚本与依赖
```

## 环境变量

项目不依赖秘密环境变量。部署时建议设置：

```text
SITE_URL=https://你的正式域名
BASE_PATH=/
```

- `SITE_URL` 用于 canonical 与 Open Graph URL；未设置时不会输出错误的占位 canonical。
- `BASE_PATH` 默认为 `/`。部署到 GitHub Pages 普通项目仓库时通常为 `/仓库名`。

不要提交 `.env`、`.env.*`、`.dev.vars` 等本地环境文件。

## 部署

- Vercel：见 [DEPLOYMENT.md](DEPLOYMENT.md)
- 中国大陆访问备用部署：见 [CHINA_SIMPLE_DEPLOYMENT.md](CHINA_SIMPLE_DEPLOYMENT.md)
- 自定义域名：见 [CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)
- Netlify、Cloudflare Pages、GitHub Pages：见 [MIGRATION.md](MIGRATION.md)
- 备份与恢复：见 [BACKUP.md](BACKUP.md)

所有平台的基础生产配置均为：

```text
Build command: npm run build
Output directory: dist
```

## 后续维护建议

1. 以 GitHub `main` 分支作为可恢复的主版本。
2. 新内容优先通过 Markdown 更新，避免把正文写死在组件中。
3. 每次提交前运行 `npm run check` 与 `npm run build`。
4. 每月或重大更新前检查图片、外部链接和隐私脱敏。
5. 依赖升级分批进行，不使用未经检查的强制升级。
6. 重大改版先创建分支，确认构建和移动端排版后再合并。
7. 稳定对外使用时绑定自定义域名，降低部署平台迁移成本。

## 隐私与内容边界

本网站不应提交或公开真实案件材料、未脱敏证据、证件扫描件、成绩单、环境变量或未经授权的他人肖像。项目 Demo、文章与流程说明仅用于学习、交流和作品展示，不构成法律意见。
