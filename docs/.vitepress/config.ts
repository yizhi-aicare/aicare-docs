import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-Hans",
  title: "熠智 AI 帮助中心",
  description: "熠智 AI 电商客服的使用文档：安装、接入店铺、配置 AI 方案、知识库与账单。",
  // Project Pages serve the site at /aicare-docs/. Switch to "/" when
  // docs.yizhi.chat is attached as a custom domain, then rebuild.
  base: "/aicare-docs/",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["meta", { name: "theme-color", content: "#5b3fd4" }]
  ],

  themeConfig: {
    siteTitle: "熠智 AI 帮助中心",

    nav: [
      { text: "开始使用", link: "/start/concepts" },
      { text: "使用手册", link: "/client/overview" },
      { text: "常见问题", link: "/faq/accuracy" },
      { text: "官网", link: "https://www.yizhi.chat/" }
    ],

    sidebar: [
      {
        text: "开始使用",
        items: [
          { text: "基本概念", link: "/start/concepts" },
          { text: "注册账号", link: "/start/register" },
          { text: "下载安装客户端", link: "/start/download" },
          { text: "套餐与开通", link: "/start/plan" }
        ]
      },
      {
        text: "桌面客户端",
        items: [
          { text: "客户端总览", link: "/client/overview" },
          { text: "登录客户端", link: "/client/login" },
          { text: "接入店铺和客服账号", link: "/client/shops" },
          { text: "支持的平台", link: "/client/platforms" },
          { text: "通知设置", link: "/client/notify" },
          { text: "错误报告", link: "/client/report" }
        ]
      },
      {
        text: "网页工作台",
        items: [
          { text: "工作台总览", link: "/workspace/overview" },
          { text: "管理 AI 方案", link: "/workspace/solutions" },
          { text: "管理知识库", link: "/workspace/knowledge" },
          { text: "查看账单", link: "/workspace/billing" },
          { text: "聊天记录与数据", link: "/workspace/records" }
        ]
      },
      {
        text: "AI 方案",
        items: [
          { text: "方案编辑器", link: "/solution/editor" },
          { text: "AI 设置与智能程度", link: "/solution/agents" },
          { text: "关键词回复", link: "/solution/keywords" },
          { text: "通用配置", link: "/solution/general" },
          { text: "转人工设置", link: "/solution/transfer" },
          { text: "对话测试", link: "/solution/test" },
          { text: "查询表与登记表", link: "/solution/tables" },
          { text: "情景与触发规则", link: "/solution/triggers" }
        ]
      },
      {
        text: "知识库",
        items: [
          { text: "知识库是什么", link: "/knowledge/basics" },
          { text: "录入问答和文档", link: "/knowledge/qa-and-files" },
          { text: "商品学习", link: "/knowledge/product-learn" },
          { text: "AI 如何使用知识库", link: "/knowledge/retrieval" }
        ]
      },
      {
        text: "点数与账单",
        items: [
          { text: "点数怎么计算", link: "/billing/points" },
          { text: "兑换码", link: "/billing/redeem" },
          { text: "购买套餐和加油包", link: "/billing/purchase" }
        ]
      },
      {
        text: "常见问题",
        items: [
          { text: "回答不准怎么办", link: "/faq/accuracy" },
          { text: "平台支持问题", link: "/faq/platforms" },
          { text: "效果与使用建议", link: "/faq/effect" },
          { text: "遇到故障怎么反馈", link: "/faq/report" }
        ]
      }
    ],

    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            // CJK-aware tokenizer: MiniSearch's default splits on
            // space/punctuation, so a Chinese phrase like 转人工 becomes one
            // opaque token and queries never match. Split CJK runs into
            // unigrams + bigrams; keep latin/digit words as-is. The same
            // function is used at index-build time (node) and query time
            // (browser). VitePress serializes it with Function#toString and
            // revives it via new Function, so it must be fully
            // self-contained — no references to outer variables.
            tokenize: (text: string) => {
              const tokens: string[] = [];
              const seen = new Set<string>();
              const push = (token: string) => {
                if (token && !seen.has(token)) {
                  seen.add(token);
                  tokens.push(token);
                }
              };
              const pattern =
                /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]+|[0-9A-Za-z_$][0-9A-Za-z_$.\-]*/gu;
              for (const match of text.matchAll(pattern)) {
                const segment = match[0];
                if (/^[0-9A-Za-z_$]/.test(segment)) {
                  push(segment);
                  continue;
                }
                for (let i = 0; i < segment.length; i++) {
                  push(segment[i]);
                  if (i + 1 < segment.length) push(segment.slice(i, i + 2));
                }
              }
              return tokens;
            }
          }
        },
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "没有找到相关内容",
            resetButtonTitle: "清除搜索条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭"
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: "本页内容"
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },

    lastUpdated: {
      text: "最后更新",
      // zh-Hans medium date style renders as 2026年8月28日 (date only, no time)
      formatOptions: { dateStyle: "medium", forceLocale: true }
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    darkModeSwitchLabel: "深色模式",

    footer: {
      message: "熠智 AI · 电商客服助手",
      copyright: "© 熠智 AI · yizhi.chat"
    }
  }
});
