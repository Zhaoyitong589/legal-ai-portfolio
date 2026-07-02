# Vercel 部署与维护

## 当前状态

- 框架：Astro 静态站点
- 生产构建命令：`npm run build`
- 输出目录：`dist`
- 当前公开地址：[https://legal-ai-portfolio.vercel.app/](https://legal-ai-portfolio.vercel.app/)
- Vercel 项目名：`legal-ai-portfolio`

当前版本已通过 Vercel CLI 部署。长期维护建议将 GitHub 仓库连接到同一个 Vercel 项目，使 `main` 分支成为自动部署来源。

## 首次连接 GitHub

1. 在 GitHub 创建仓库，例如 `legal-ai-portfolio`。
2. 将本地项目的 `main` 分支推送到该仓库。
3. 登录 Vercel Dashboard，打开现有 `legal-ai-portfolio` 项目。
4. 在项目的 Git 设置中连接 GitHub，并选择对应仓库。
5. 确认生产分支为 `main`。
6. 确认构建设置：

   ```text
   Framework Preset: Astro
   Build Command: npm run build
   Output Directory: dist
   ```

7. 在项目环境变量中设置：

   ```text
   SITE_URL=https://legal-ai-portfolio.vercel.app
   BASE_PATH=/
   ```

   绑定自定义域名后，将 `SITE_URL` 改为正式域名。

连接完成后，向 `main` 推送的新提交会触发 Production Deployment；其他分支或 Pull Request 通常生成独立的 Preview Deployment。

## Production Deployment 是什么

Production Deployment 是对外正式访问域名所指向的部署版本。它与 Preview Deployment 分开：

- **Production**：用于稳定公开访问，通常对应 `main`。
- **Preview**：用于检查分支或 Pull Request，不应当作长期公开链接。

发布前应先确认 Preview 构建和页面正常，再合并到 `main`。

## 常规发布流程

```bash
git checkout main
git pull
npm ci
npm run check
npm run build
git add .
git commit -m "docs: update portfolio content"
git push origin main
```

推送后在 Vercel Dashboard 的 Deployments 页面检查最新记录是否为 Ready。

## CLI 重新部署

GitHub 尚未连接或需要手动部署时：

```bash
npm install
npm run check
npm run build
npx vercel --prod
```

新电脑首次操作可先执行 `npx vercel link`，选择已有的 `legal-ai-portfolio` 项目。`.vercel/` 是本地关联信息，已被 Git 忽略。

## 检查部署

至少检查：

- `/`
- `/projects/`
- `/writing/`
- `/talks/`
- `/background/`
- `/contact/`
- 项目详情页与文章详情页
- CSS、头像、项目截图与文章配图

同时确认：

- Vercel 状态为 Ready。
- 浏览器没有 404 或明显控制台错误。
- 移动端没有横向滚动或严重错位。
- `SITE_URL` 与实际公开域名一致。

## 回滚

推荐在 Vercel Dashboard 中操作：

1. 打开项目的 Deployments。
2. 找到最后一个正常版本。
3. 检查该版本的构建时间与提交信息。
4. 使用 Vercel 提供的 Promote / Redeploy 等操作，将旧版本恢复为 Production。

如果问题来自代码，也可以在 Git 中创建一个恢复提交后重新推送：

```bash
git revert <有问题的提交哈希>
git push origin main
```

不要用强制推送覆盖公开项目的历史，除非已经确认不会影响协作与恢复。
