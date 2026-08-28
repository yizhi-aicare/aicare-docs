# 旧地址跳转映射

旧的站内文档（`aicare-support-website` 的 `helpDocs` / `GuideView`）地址迁移到本文档站后的对应关系。

实现方式：每个旧地址都有一个独立的跳转页（`docs/docs/*.md`、`docs/guide.md`），页面 frontmatter 里的 `redirectTo` 由主题 `Layout.vue` 在客户端跳转，`meta http-equiv=refresh` 兜底无 JS 场景，并带 `noindex` 避免搜索引擎收录旧地址。

| 旧地址 | 新地址 |
| --- | --- |
| `/docs` | `/` |
| `/guide` | `/start/concepts` |
| `/docs/create-account` | `/start/register` |
| `/docs/store-basics` | `/client/shops` |
| `/docs/first-ai-solution` | `/solution/editor` |
| `/docs/wechat-notify` | `/client/notify` |
| `/docs/kb-basics` | `/knowledge/basics` |
| `/docs/kb-input` | `/knowledge/qa-and-files` |
| `/docs/kb-product` | `/knowledge/product-learn` |
| `/docs/kb-retrieval` | `/knowledge/retrieval` |
| `/docs/solution-editor` | `/solution/editor` |
| `/docs/keyword-reply` | `/solution/keywords` |
| `/docs/general-config` | `/solution/general` |
| `/docs/transfer-config` | `/solution/transfer` |
| `/docs/data-stats` | `/workspace/records` |
| `/docs/chat-records` | `/workspace/records` |
| `/docs/followup-failed` | `/solution/transfer` |
| `/docs/billing-points` | `/billing/points` |
| `/docs/billing-redeem` | `/billing/redeem` |
| `/docs/billing-purchase` | `/billing/purchase` |
| `/docs/faq-accuracy` | `/faq/accuracy` |
| `/docs/faq-report` | `/faq/report` |
| `/docs/faq-platforms` | `/faq/platforms` |
| `/docs/faq-effect` | `/faq/effect` |

注意：这些旧 slug 原先挂在 `www.yizhi.chat` 的站内路由上。若网站侧后续把 `/docs/*` 直接 301 到 `docs.yizhi.chat` 对应路径，可在网关层复用本表；本站的跳转页保证直接访问 `docs.yizhi.chat/docs/*` 也能落到正确页面。
