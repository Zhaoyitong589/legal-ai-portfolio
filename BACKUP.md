# 备份与恢复策略

## 备份原则

建议使用“三层备份”：

1. **GitHub 仓库**：源码与版本历史的主备份。
2. **本地项目目录**：日常编辑和构建副本。
3. **离线 ZIP**：重要版本的独立快照，可放在移动硬盘或可信云盘。

Vercel、Netlify 等部署平台不是源码主备份。部署可以重建，Git 历史与内容源更重要。

## GitHub 主备份

稳定版本应合并到 `main` 并推送：

```bash
git checkout main
git pull
git push origin main
```

每次重要更新前后检查：

```bash
git status
git log --oneline -5
```

## 重要版本打 Tag

例如为首个稳定作品集版本打标签：

```bash
git tag -a v1.0-portfolio -m "法律 AI 个人作品集初版"
git push origin v1.0-portfolio
```

后续可以使用 `v1.1-portfolio`、`v2.0-portfolio` 等清晰版本号。

## 重大修改前创建分支

```bash
git checkout main
git pull
git switch -c chore/portfolio-update
```

在分支完成修改、检查与构建后，再通过 Pull Request 合并到 `main`。不要直接在公开生产分支上进行大规模试验。

## 导出 ZIP

推荐从已经提交的 Git 版本导出，自动排除 `node_modules`、`dist`、`.env` 和其他未跟踪文件：

```bash
git archive --format=zip --output="../legal-ai-portfolio-v1.0.zip" v1.0-portfolio
```

如果尚未打 Tag，也可以导出当前提交：

```bash
git archive --format=zip --output="../legal-ai-portfolio-backup.zip" HEAD
```

ZIP 文件名建议包含版本或日期，例如：

```text
legal-ai-portfolio-v1.0-2026-07-02.zip
```

不要把备份 ZIP 放进项目仓库再次提交。

## 从 GitHub 恢复

```bash
git clone <仓库地址>
cd legal-ai-portfolio
npm ci
npm run check
npm run build
npm run dev
```

然后重新连接部署平台：

- Vercel：导入 GitHub 仓库，或运行 `npx vercel link`。
- Netlify / Cloudflare Pages：重新导入仓库。
- GitHub Pages：确认 Pages Source 为 GitHub Actions。

## 从 ZIP 恢复

1. 将 ZIP 解压到新目录。
2. 确认 `package.json`、`package-lock.json`、`src/`、`public/` 和文档存在。
3. 运行：

   ```bash
   npm ci
   npm run check
   npm run build
   npm run dev
   ```

4. 如果 ZIP 不包含 `.git` 历史，应优先重新关联原 GitHub 仓库，而不是直接覆盖远程历史。

## 备份频率

- 普通文章或项目更新：提交并推送 GitHub。
- 培训前、申请材料提交前、视觉大改前：创建分支。
- 对外正式发布或里程碑版本：打 Tag 并导出 ZIP。
- 每季度：抽查一次 ZIP 是否可解压、项目是否能 `npm ci` 和构建。
