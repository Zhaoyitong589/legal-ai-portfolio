# 法律 AI 实践档案

一个以 Markdown 为内容源的个人作品集网站，适合展示法律 AI 项目、文章、培训分享、教育经历与奖项。站点使用 Astro 构建，默认输出纯静态文件，可部署到 GitHub Pages、Vercel 或 Netlify。

## 本地运行

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端提示的地址。提交前建议运行：

```bash
npm run check
npm run build
```

如果 Windows PowerShell 提示“无法加载 npm.ps1，因为系统禁止运行脚本”，直接改用：

```powershell
npm.cmd install
npm.cmd run dev
```

然后打开 `http://localhost:4321/`。停止本地服务时，在运行命令的终端按 `Ctrl + C`。

## 先替换这些占位内容

1. `src/lib/site.ts`：姓名、邮箱、所在地；
2. `src/pages/background.astro`：教育、法考、交换与获奖经历；
3. `src/pages/contact.astro`：GitHub、文章平台和 LinkedIn 链接；
4. `src/content/`：项目、文章、分享的示例文案；
5. `public/images/`：项目截图与活动照片；
6. `astro.config.mjs` 中的默认 `site`，或在部署平台设置 `SITE_URL`。

公开发布前，请特别检查客户信息、案件材料、参与者肖像和证件信息是否已经脱敏或获得授权。

## 新增内容

### 新增项目

复制 `src/content/projects/risk-screening.md`，重命名后修改文件开头的字段与正文。文件名会成为访问路径，例如：

```text
src/content/projects/contract-review.md
→ /projects/contract-review/
```

`externalUrl` 是在线 Demo 地址；尚未上线时删除该行即可。截图放入 `public/images/projects/`，然后在 `cover` 中填写相对路径，不要以 `/` 开头。

项目状态使用 `statuses` 数组，可选值为 `已上线`、`本地原型`、`待部署`。例如：

```yaml
statuses: ["本地原型", "待部署"]
```

### 新增文章

复制 `src/content/writing/legal-ai-is-not-an-answer-machine.md`。

- 站内全文：删除 `externalUrl`，在 Markdown 正文中写文章；
- 外部文章：设置 `externalUrl`，列表会直接跳转；
- 文章同步到公众号后：在头部加入 `wechatUrl: "https://mp.weixin.qq.com/s/..."`，详情页顶部会自动显示入口；
- 发布状态：使用 `statuses` 数组，可选值为 `站内首发`、`拟同步公众号`、`已同步公众号`；
- 暂不发布：设置 `draft: true`。

### 新增培训或分享

复制 `src/content/talks/law-firm-training-basics.md`。照片放入 `public/images/talks/`，可在 `photos` 下添加多张：

```yaml
photos:
  - src: "images/talks/photo-01.jpg"
    alt: "活动现场的客观描述"
    caption: "活动名称与时间"
```

## 目录说明

```text
src/
├─ components/        可复用组件
├─ content/
│  ├─ projects/      项目 Markdown
│  ├─ writing/       文章 Markdown
│  └─ talks/         分享 Markdown
├─ layouts/           页面布局
├─ lib/site.ts        个人与站点信息
├─ pages/             路由页面
└─ styles/            全局样式
public/images/        图片与静态资源
```

内容字段由 `src/content.config.ts` 校验。字段拼错或缺失时，构建会直接报错，便于在上线前发现问题。

## 部署

### Vercel

1. 把项目推送到 GitHub；
2. 在 Vercel 导入仓库；
3. 框架通常会自动识别为 Astro；
4. 构建命令为 `npm run build`，输出目录为 `dist`；
5. 设置环境变量 `SITE_URL=https://你的域名`。

### Netlify

仓库已包含 `netlify.toml`。在 Netlify 导入仓库后，设置 `SITE_URL` 即可。

### GitHub Pages

仓库已包含 `.github/workflows/deploy.yml`。推送到 GitHub 后：

1. 打开仓库 Settings → Pages；
2. Source 选择 **GitHub Actions**；
3. 推送到 `main` 分支，工作流会自动构建和发布；
4. 若使用自定义域名，在工作流或仓库变量中按实际域名调整 `SITE_URL`。

工作流会自动识别 `username.github.io` 根站点和普通仓库的子路径，无需手动修改站内链接。
