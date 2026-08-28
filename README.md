# aicare-docs

熠智 AI 的公开帮助文档站，基于 VitePress 构建。取代 `aicare-support-website` 中旧的站内文档（`src/content.ts` 的 helpDocs 与 `src/views/GuideView.vue`）。

- 线上目标域名：`https://docs.yizhi.chat`（尚未上线）
- 产品官网：<https://www.yizhi.chat/>

## 本地开发

要求 Node >= 20.19，包管理器 pnpm。

```bash
pnpm install
pnpm docs:dev       # 本地开发服务器
pnpm docs:build     # 构建产物到 docs/.vitepress/dist
pnpm docs:preview   # 预览构建产物
```

## 目录结构

```
docs/
  .vitepress/
    config.ts        # 站点配置：导航、侧边栏、本地搜索
    theme/           # 自定义主题：品牌色令牌 + 旧地址跳转 Layout
  index.md           # 首页
  start/             # 开始使用
  client/            # 桌面客户端
  workspace/         # 网页工作台
  solution/          # AI 方案
  knowledge/         # 知识库
  billing/           # 点数与账单
  faq/               # 常见问题
  docs/ + guide.md   # 旧地址跳转页（见 REDIRECTS.md）
```

## 内容规范

- 只描述已实现且默认可用的能力；按套餐开放的能力明确标注「按套餐开放 / 需开通」。
- 支持平台口径：千牛/淘宝（仅 Windows）、拼多多、京东、抖音、快手、闲鱼（闲鱼不支持转人工）。**不含 1688**。
- 接待在商家电脑上运行，不写「云端托管 / 7×24 云接待」。
- 计费只写商家在账单页能看到的口径（点数、套餐、加油包、兑换码），不写按 token 的换算公式。
- 不使用 HTML/CSS 仿制软件界面，不用 emoji 图标。需要的真实截图见 `SCREENSHOTS.md`。

## 相关文件

- `REDIRECTS.md`：旧站内文档地址 → 新地址映射表。
- `SCREENSHOTS.md`：各页面待补的真实截图清单。
- `.github/workflows/ci.yml`：PR / push 时运行 `pnpm docs:build`。
