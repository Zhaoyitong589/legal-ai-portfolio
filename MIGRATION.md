# 平台迁移指南

## 可迁移性结论

本项目使用 Astro 的 `output: "static"`，构建结果是 `dist/` 中的纯静态 HTML、CSS、JavaScript 与图片：

- 没有数据库；
- 没有 Serverless Function；
- 没有 Vercel 专属运行时代码；
- 内部链接通过 `BASE_PATH` 适配根路径或子路径；
- 路由使用目录格式并保留尾斜杠，适合静态托管。

因此可以迁移到 Vercel、Netlify、Cloudflare Pages 和 GitHub Pages。`vercel.json` 只是 Vercel 的构建提示，不影响其他平台，可在其他平台忽略。

通用配置：

```text
Node.js: 22
Build command: npm run build
Output directory: dist
SITE_URL: 实际公开域名
BASE_PATH: /
```

## Netlify

### 适合情况

- 希望快速连接 GitHub 并自动部署；
- 需要成熟的静态站点托管、预览部署和域名管理；
- 希望基本不修改当前项目。

### 配置

仓库已包含 `netlify.toml`：

```text
Build command: npm run build
Publish directory: dist
```

在 Netlify 导入 GitHub 仓库，并设置：

```text
SITE_URL=https://你的 Netlify 域名或自定义域名
BASE_PATH=/
```

### 注意事项

- 保留 `trailingSlash: "always"`，静态详情页可按目录访问。
- 检查图片和 CSS 是否使用生成后的正确路径。
- 如果启用自定义域名，更新 `SITE_URL` 并重新部署。
- 当前项目不需要 Netlify Functions。

## Cloudflare Pages

### 适合情况

- 希望使用 Cloudflare 的全球静态资源网络；
- 域名 DNS 已由 Cloudflare 管理；
- 希望获得 Git 分支预览和较强的静态站点分发能力。

### 配置

在 Cloudflare Pages 连接 GitHub 仓库：

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node.js version: 22
```

环境变量：

```text
SITE_URL=https://你的 Pages 域名或自定义域名
BASE_PATH=/
```

### 注意事项

- 选择 **Pages 静态站点** 即可，不需要 Workers 或 Pages Functions。
- 不要把 `.dev.vars`、`.env` 或 `.wrangler/` 提交到仓库。
- 如果未来增加服务端能力，需要重新评估 Astro adapter；当前版本不需要。
- 自定义域名切换后要同步更新 `SITE_URL`。

## GitHub Pages

### 适合情况

- 希望使用 GitHub 仓库作为代码与托管的一体化备份；
- 网站完全静态；
- 可以接受普通项目仓库使用 `/仓库名/` 子路径。

### 配置

仓库已包含 `.github/workflows/deploy.yml`。推送到 GitHub 后：

1. 打开仓库 Settings → Pages。
2. Source 选择 GitHub Actions。
3. 推送到 `main`，工作流会执行：

   ```text
   npm ci
   npm run build
   ```

4. 工作流将 `dist/` 发布到 Pages。

工作流会自动处理：

- `username.github.io` 仓库：`BASE_PATH=/`
- 普通仓库：`BASE_PATH=/仓库名`

### 自定义域名

为 GitHub Pages 配置自定义域名时，在仓库 Settings → Secrets and variables → Actions → Variables 中设置：

```text
SITE_URL=https://你的域名
BASE_PATH=/
```

再按 GitHub Pages 页面提示设置自定义域名与 DNS。

### 限制与注意事项

- GitHub Pages 只托管静态文件，不支持服务端代码；当前项目是纯静态输出，因此兼容。
- 普通项目仓库部署在子路径，任何新增资源都应继续使用 `withBase()`、Astro 资源导入或内容字段中的相对路径。
- 不要在页面中新增以 `/` 开头且未经 `BASE_PATH` 处理的内部链接或静态资源路径。
- GitHub Pages 对构建和部署有平台配额，不适合高频、大规模构建，但个人作品集通常足够。
- 若未来加入登录、数据库、动态 API，应优先使用 Vercel、Netlify、Cloudflare Workers/Pages Functions 或独立后端，而不是 GitHub Pages。

## 迁移检查清单

1. 在新平台设置 Node.js 22。
2. 使用 `npm ci` 安装锁定依赖。
3. 设置正确的 `SITE_URL` 和 `BASE_PATH`。
4. 确认构建命令为 `npm run build`，输出目录为 `dist`。
5. 使用平台临时域名检查所有主页面和详情页。
6. 检查 CSS、头像、项目截图、文章配图与 favicon。
7. 检查外部 Demo 链接和联系方式。
8. 自定义域名切换后重新检查 HTTPS 与 canonical。
9. 保留旧平台部署，直到 DNS 完全生效。

## 推荐顺序

在不改变当前技术栈的情况下：

1. **Netlify**：迁移最直接，现有 `netlify.toml` 可直接使用。
2. **Cloudflare Pages**：适合域名和 DNS 已在 Cloudflare 管理的情况。
3. **GitHub Pages**：最适合作为免费静态备份站，但普通仓库需要注意子路径。
