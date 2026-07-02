# 中国大陆访问备用部署指南

## 目标

在保留现有 Vercel 正式链接和当前技术栈的前提下，增加一个中国大陆用户更容易尝试访问的备用链接。

需要先说明：任何未备案、部署在中国大陆以外节点、使用平台默认域名的免费方案，都无法保证在中国大陆所有地区和运营商下稳定访问。备用链接应由不同城市、不同运营商和手机网络实际测试。

## 当前项目

- 框架：Astro 7
- 类型：纯静态展示网站
- 安装依赖：`npm install` 或 CI 中使用 `npm ci`
- 开发命令：`npm run dev`
- 检查命令：`npm run check`
- 构建命令：`npm run build`
- 生产预览：`npm run preview`
- 构建产物目录：`dist/`

项目没有数据库、API Routes、Vercel Serverless Functions、Edge Functions 或必须依赖 Vercel 的运行时代码。`SITE_URL` 只用于生成 canonical/分享地址，`BASE_PATH` 用于适配根路径和 GitHub Pages 子路径，不是秘密变量。

因此，本项目可以直接作为纯静态网站部署。

## 最推荐的最小备用方案

### 腾讯 EdgeOne Makers（原 EdgeOne Pages）直接上传

推荐原因：

- 官方支持 Astro 等静态站点；
- 可以直接上传已经构建好的 `dist/`，不要求先完成 GitHub 接入；
- CLI 登录时可选择 China（国内站）；
- 不需要改页面、不需要服务器运维；
- 可以快速获得平台临时域名，用于和 Vercel 链接对比测试。

EdgeOne Pages 已升级为 EdgeOne Makers，原有项目、域名和 CLI 逻辑保持兼容。平台默认域名仍不等于中国大陆境内备案加速，实际访问质量必须测试。

官方参考：

- [EdgeOne CLI](https://edgeone.cloud.tencent.com/pages/document/162936923278893056)
- [EdgeOne Makers 常见问题](https://cloud.tencent.com/document/product/1552/127458)

### 第一次部署

```bash
npm install
npm run check
npm run build
npx edgeone login
npx edgeone pages deploy ./dist -n legal-ai-portfolio-cn -e production
```

登录时：

1. 选择 `China` 国内站。
2. 在弹出的腾讯云页面中登录或注册账号。
3. 按页面要求完成账号验证。
4. 返回终端继续上传 `dist/`。
5. 记录部署完成后返回的公开链接。

如果 CLI 名称或产品界面因 EdgeOne Pages 更名为 Makers 而变化，以官方控制台和 CLI 帮助中的最新命令为准：

```bash
npx edgeone --help
npx edgeone pages --help
```

### 更新网站后重新部署

```bash
npm install
npm run check
npm run build
npx edgeone pages deploy ./dist -n legal-ai-portfolio-cn -e production
```

不要直接上传 `src/`、`node_modules/` 或整个项目目录；最简单的静态部署只上传 `dist/`。

### 平台构建配置

如果以后改为连接 Git 仓库：

```text
Framework: Astro
Build command: npm run build
Output directory: dist
Node.js: 22
SITE_URL: EdgeOne 临时域名或自定义域名
BASE_PATH: /
```

## 其他免备案临时路线

### Cloudflare Pages

配置：

```text
Build command: npm run build
Output directory: dist
BASE_PATH: /
```

优点是静态部署成熟、可快速生成链接。限制是普通 Cloudflare 全球网络不等同于 Cloudflare 中国网络；官方中国网络是单独的 Enterprise 服务，并要求域名具备 ICP 备案。因此 `pages.dev` 在中国大陆的速度和可用性不能保证，必须实测。

官方参考：[Cloudflare China Network](https://developers.cloudflare.com/china-network/)

### Netlify

仓库已有 `netlify.toml`，可直接使用：

```text
Build command: npm run build
Output directory: dist
```

它适合快速静态部署，但节点和默认域名并非中国大陆境内服务。可能与 Vercel表现不同，但不能视为稳定的国内方案。

### GitHub Pages

当前项目已支持 GitHub Pages 子路径，工作流在 `.github/workflows/deploy.yml`。

优点是代码备份与静态托管结合。限制是 GitHub 在中国大陆不同网络下的访问质量差异较大，不适合作为唯一的国内备用链接。

## 国内正式方案

### 方案一：阿里云 OSS 或腾讯云 COS 静态网站

适合：

- 网站长期面向国内老师、律所和朋友；
- 内容是当前这种纯静态作品集；
- 希望低维护、按存储和流量付费。

基本流程：

1. 购买域名。
2. 在中国大陆区域创建 OSS/COS Bucket。
3. 开启静态网站托管。
4. 上传 `dist/` 内的全部文件和目录。
5. 设置默认首页为 `index.html`。
6. 绑定自定义域名并配置 HTTPS。
7. 将 `SITE_URL` 设置为正式域名后重新构建、上传。

备案：

- 域名解析到中国大陆服务器或中国大陆 OSS/COS 网站服务时，通常需要完成 ICP 备案。
- 阿里云官方明确说明，OSS 绑定自定义域名用于网站访问时需要关注并完成备案。
- 腾讯云 COS 自定义域名用于静态网站时也要求检查 ICP 备案。
- 平台默认 Bucket 域名可用于有限测试，但可能存在浏览器预览、下载响应、安全策略或域名有效期限制，不应作为长期对外作品集地址。

官方参考：

- [阿里云：使用 OSS 的备案要求](https://help.aliyun.com/zh/icp-filing/basic-icp-service/product-overview/use-oss)
- [腾讯云 COS：静态网站](https://intl.cloud.tencent.com/document/product/436/42383)

成本与维护：

- 个人静态站存储量很小，通常主要按存储、请求和下行流量计费；
- 维护复杂度低到中等；
- 实际价格应以创建资源时的官方计费页和价格计算器为准。

这是最适合以后长期给国内律所、老师和朋友访问的方案。

### 方案二：中国大陆云服务器 + Nginx

适合：

- 未来需要更多服务端能力；
- 愿意维护 Linux、Nginx、HTTPS、防火墙与安全更新。

部署方式：

1. 购买中国大陆云服务器。
2. 完成域名 ICP 备案。
3. 安装 Nginx。
4. 把 `dist/` 上传到站点目录。
5. 配置首页、404、HTTPS 和缓存。

限制：

- 服务器、带宽和维护成本高于 OSS/COS；
- 需要持续安全更新和监控；
- 当前只是纯静态作品集，没有必要一开始就选择此方案。

服务器公网 IP 可以做短期技术测试，但不适合作为公开作品集地址，也不能替代正式域名和合规要求。

### 方案三：中国香港对象存储或服务器

香港节点通常不要求中国大陆 ICP 备案，可以较快上线，也可能比欧美节点更接近大陆用户。

但它仍属于境外托管，跨境网络质量会随地区和运营商变化。适合作为过渡备用，不等同于中国大陆境内正式方案。

## 国内访问不稳定时的排查

1. 确认备用平台部署状态为成功。
2. 检查首页、`/projects/`、`/writing/`、`/talks/`、`/background/`、`/contact/`。
3. 打开浏览器开发者工具，检查 CSS、JavaScript、头像和项目图片是否出现 404。
4. 使用手机流量、家庭宽带和不同运营商分别测试。
5. 请位于不同城市的 2–3 位朋友测试首屏速度和详情页。
6. 区分 DNS 失败、连接超时、证书错误、资源 404 和单纯加载较慢。
7. 若只有平台默认域名不稳定，尝试更换平台或绑定自定义域名。
8. 若需要中国大陆节点和稳定正式访问，转向已备案域名 + 中国大陆 OSS/COS/CDN。

## 是否需要域名和备案

- **临时备用链接**：使用 EdgeOne Makers 等平台默认域名时，可先不买域名、不备案，先测试可访问性。
- **长期正式使用**：建议购买自己控制的域名。
- **使用中国大陆服务器、对象存储网站或大陆 CDN 节点**：通常需要 ICP 备案。
- **使用香港或海外节点**：通常不要求中国大陆 ICP 备案，但国内访问稳定性无法保证。

最务实的顺序：

1. 先用 EdgeOne Makers 直接上传 `dist/`，获得备用链接。
2. 让国内不同网络的朋友实测 Vercel 与备用链接。
3. 如果作品集长期面向国内访问，再购买域名、备案，并迁移到中国大陆 OSS/COS 静态托管。
