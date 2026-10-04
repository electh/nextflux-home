// Source copy stays in the HTML; only text and accessible labels change languages.
const siteI18n = (() => {
  const english = {
    "Nextflux 搜索界面：跨订阅查找 iPhone 相关文章，可切换文章与订阅搜索":
      "Nextflux search: iPhone articles across feeds, with article and feed search modes",
    "好内容，随时找回来": "GOOD STORIES, EASY TO FIND AGAIN",
    "一个关键词。": "One keyword.",
    "串起你的订阅世界。": "Your feeds, connected.",
    "跨订阅查找文章，也能切换到订阅搜索。用方向键选择，按回车打开，思路不用停下来。":
      "Find articles across your feeds, or switch to feed search. Choose with the arrow keys and press Enter to open. Stay in the flow.",
    选择: "Select",
    打开: "Open",
    "真实界面 · 文章与订阅搜索":
      "ACTUAL INTERFACE \u00b7 ARTICLE & FEED SEARCH",

    "你的阅读，你来调": "YOUR READING, YOUR WAY",
    "从标题到正文。": "From title to text.",
    "每一处，都合心意。": "Every detail, just right.",
    "字体、字号、行高、正文宽度，按自己的习惯调整。标题对齐、正文两端对齐与阅读导航，也有各自的开关。":
      "Choose your font, text size, line height, and reading width. Adjust title alignment, justify the text, and enable reading navigation to suit your habits.",
    "真实界面 · 阅读设置": "ACTUAL INTERFACE \u00b7 READING SETTINGS",
    "Nextflux 阅读设置：标题对齐与大小、字体、两端对齐、行高、字号、正文宽度和阅读导航":
      "Nextflux reading settings: title alignment and size, font, text justification, line height, text size, reading width, and reading navigation",

    "MINIFLUX · 高级功能适配": "MINIFLUX · ADVANCED FEATURES",
    "强大的订阅引擎。": "A powerful feed engine.",
    "顺手的高级控制。": "Advanced control, within reach.",
    "在 Nextflux 里直接配置 Miniflux 的高级订阅选项。从抓取到筛选，让每一个订阅更合你的心意。":
      "Configure advanced Miniflux feed options right in Nextflux. From fetching to filtering, make every subscription work for you.",
    "全文抓取，更完整。": "Fetch the full story.",
    "开启自动抓取原文，配合 Scraper rules 自定义内容抓取。":
      "Fetch original content automatically and customize extraction with Scraper rules.",
    "保留与屏蔽，更精准。": "Keep what matters.",
    "通过 Keep rules 和 Block rules 筛选文章，把注意力留给想读的内容。":
      "Filter articles with Keep rules and Block rules. Save your attention for what you want to read.",
    "重写与隐藏，更自在。": "Make your feeds your own.",
    "用 Rewrite rules 调整内容；全局隐藏指定订阅，让日常列表更清爽。":
      "Adjust content with Rewrite rules and hide selected feeds globally for a quieter everyday list.",
    "规则由 Miniflux 执行，设置在 Nextflux 中管理。":
      "Rules run in Miniflux. Settings are managed in Nextflux.",
    "Nextflux 的 Miniflux 高级订阅设置：抓取、保留、屏蔽、重写规则与全局隐藏":
      "Advanced Miniflux feed settings in Nextflux: scraper, keep, block, and rewrite rules, plus global hiding",
    "真实界面 · 高级订阅选项": "ACTUAL INTERFACE · ADVANCED FEED OPTIONS",

    "Nextflux，一个为专注阅读而生的 Miniflux 客户端。优雅排版、丰富主题、快捷操作，让你的订阅与好奇心自由流动。":
      "Nextflux, a Miniflux client made for focused reading. Thoughtful typography, personal themes, and effortless shortcuts. A little room for your curiosity.",
    "Nextflux — 让阅读，回到阅读。":
      "Nextflux — Bring the joy back to reading.",
    跳到正文: "Skip to content",
    "Nextflux 首页": "Nextflux home",
    主导航: "Main navigation",
    阅读体验: "Experience",
    功能: "Features",
    开始使用: "Get started",
    "为 MINIFLUX 而生的 RSS 阅读器": "AN RSS READER MADE FOR MINIFLUX",
    "让阅读，": "Less noise.",
    "回到阅读。": "More reading.",
    "少一些喧嚣，多一些好内容。":
      "A quieter place for the things you love to read.",
    "把喜欢的作者、博客与资讯，安放在一个舒服的地方。":
      "Your favorite writers, blogs, and news. All comfortably at home.",
    "打开 Nextflux": "Open Nextflux",
    探索阅读体验: "Explore the experience",
    "开源 · 自托管 · 为你的好奇心留一点空间":
      "Open source · Self-hosted · A little room for curiosity",
    "你的订阅，你的节奏。": "Your feeds. Your pace.",
    预览界面主题: "Preview theme",
    日间: "Day",
    夜间: "Night",
    "Nextflux 实际界面：左侧分类订阅，中间文章列表，右侧显示 Golden Hill Software 的图文文章":
      "The Nextflux interface: feeds on the left, articles in the middle, and a Golden Hill Software article on the right",
    "Nextflux 浅色真实界面：分类订阅、文章列表与图文阅读三栏布局":
      "Nextflux in light mode: a three-column layout for feeds, articles, and reading",
    "Nextflux 深色真实界面：分类订阅、文章列表与图文阅读三栏布局":
      "Nextflux in dark mode: a three-column layout for feeds, articles, and reading",
    "Nextflux 实际界面": "The real Nextflux interface",
    "好内容，值得一个好界面。": "Good stories deserve a good home.",
    "一个轻巧的客户端。": "One lightweight client.",
    "一整片属于你的阅读世界。": "A whole world of reading, yours.",
    "Miniflux 驱动": "Powered by Miniflux",
    桌面优先: "Desktop first",
    "开源，自由部署": "Open source. Yours to host.",
    "01 / 阅读体验": "01 / THE READING EXPERIENCE",
    "界面退后一步。": "Less interface.",
    "内容向前一点。": "More story.",
    "阅读的乐趣，藏在细节里。": "The joy of reading lives in the details.",
    "从文字的呼吸感，到每一次顺手的切换，":
      "Room for words to breathe. Effortless navigation.",
    "Nextflux 让你自然地读下去。": "Nextflux keeps you in the flow.",
    "按你的习惯，排好每一个字。": "Every word, just the way you like it.",
    "4 分钟阅读": "4 min read",
    "给好奇心，": "Leave a window",
    "留一扇窗。": "open for curiosity.",
    "网络很大，但你不必听见所有声音。订阅喜欢的作者，让值得读的文字，慢慢来到你面前。":
      "The web is vast, but you don't have to hear every voice. Follow the writers you love, and let their words find their way to you.",
    "一杯咖啡，一段留白。阅读可以简单到，只剩下你和眼前的好内容。":
      "A cup of coffee. A little breathing room. Reading can be as simple as you and a good story.",
    体验阅读字体: "Try reading fonts",
    试试你的阅读风格: "Make reading yours",
    宋体: "Serif",
    黑体: "Sans",
    减小示例字号: "Decrease sample text size",
    增大示例字号: "Increase sample text size",
    "排版交互示意 · 实际应用支持字体、字号、行高与正文宽度设置":
      "Typography demo · Customize font, size, line height, and reading width in the app",
    "一眼找到。": "Find your place.",
    "一路读下去。": "Keep on reading.",
    "订阅、列表、正文，三栏各就其位。":
      "Feeds, articles, and stories. Each in its own place.",
    "在熟悉的布局里，把注意力留给文章。":
      "A familiar layout that lets you focus on the words.",
    "少一点点击，多一点流畅": "Fewer clicks. A smoother flow.",
    "让手指跟上思绪。": "Keep pace with your thoughts.",
    "键盘快捷键、滚动标记已读。": "Keyboard shortcuts. Mark as read on scroll.",
    "好用的细节，让阅读不被打断。":
      "Small details that keep reading uninterrupted.",
    "02 / 每一种阅读空间": "02 / ROOM TO READ",
    "大屏从容展开。": "Room on the big screen.",
    "小屏依然好读。": "Focus on the small one.",
    "订阅、列表与正文，随可用空间调整。":
      "Feeds, lists, and stories adapt to the space you have.",
    "从三栏浏览，到专注阅读，总有舒服的布局。":
      "From three-column browsing to focused reading, find a layout that feels right.",
    应用内提供的主题: "Themes available in the app",
    浅色: "Light",
    石灰: "Stone",
    深色: "Dark",
    深蓝: "Nord",
    "多种主题 · 跟随系统切换 · 独立设置日间与夜间主题":
      "Multiple themes · Follow your system · Separate day and night themes",
    轮播: "carousel",
    幻灯片: "slide",
    "不同宽度下的 Nextflux 布局": "Nextflux layouts at different widths",
    "第 1 张，共 4 张：宽屏三栏": "1 of 4: Wide view",
    "第 2 张，共 4 张：紧凑双栏": "2 of 4: Compact view",
    "第 3 张，共 4 张：订阅与列表": "3 of 4: Feeds and articles",
    "第 4 张，共 4 张：专注正文": "4 of 4: Focused reading",
    "宽屏 Nextflux：订阅、文章列表和正文同时展示":
      "Wide Nextflux layout showing feeds, articles, and the story side by side",
    "紧凑宽度的 Nextflux：收起订阅侧栏，保留文章列表和正文":
      "Compact Nextflux layout with the feeds sidebar hidden and articles beside the story",
    "较窄宽度的 Nextflux：订阅与文章列表并排展示":
      "Narrower Nextflux layout with feeds beside the article list",
    "窄屏 Nextflux：正文占满阅读区域，专注图文内容":
      "Narrow Nextflux layout with the story filling the reading area",
    上一张布局截图: "Previous layout screenshot",
    下一张布局截图: "Next layout screenshot",
    选择布局截图: "Choose a layout screenshot",
    宽屏三栏: "Wide view",
    紧凑双栏: "Compact view",
    订阅与列表: "Feeds & articles",
    专注正文: "Focused reading",
    展示宽屏三栏: "Show wide view",
    展示紧凑双栏: "Show compact view",
    展示订阅与列表: "Show feeds and articles",
    展示专注正文: "Show focused reading",
    "03 / 不止于好看": "03 / MORE THAN GOOD LOOKS",
    "轻盈的外表。": "Light on the surface.",
    "周全的内在。": "Thoughtful underneath.",
    "好内容，自动到来。": "New stories come to you.",
    "后台自动同步，自定义刷新间隔。打开阅读器，继续发现你关心的新鲜事。":
      "Sync in the background at an interval you choose. Open your reader and catch up on what matters to you.",
    自动同步: "Background sync",
    "订阅多，也井井有条。": "More feeds. Less clutter.",
    "分类整理、订阅发现、搜索与隐藏。支持 OPML 导入导出，轻松带上你的阅读世界。":
      "Organize, discover, search, and hide feeds. Import and export OPML to bring your reading world with you.",
    订阅管理: "Feed management",
    "用舒服的方式读。": "Read in your comfort zone.",
    "自定义字体、字号、行高和正文宽度。大图查看支持触控手势，细节也值得看清。":
      "Choose your font, size, line height, and reading width. Explore images with touch gestures, because details deserve a closer look.",
    个性化阅读: "Personal reading settings",
    "长文章，先理清脉络。": "Find the thread in a long read.",
    "可配置 AI 总结，连接自己的 OpenAI 或兼容 API。是否使用，由你决定。":
      "Optional AI summaries with your own OpenAI or compatible API. Use them whenever you choose.",
    "可选 AI 总结": "Optional AI summaries",
    "值得收藏，就留住。": "Keep the stories you love.",
    "收藏喜欢的文章，或保存到 Miniflux 配置的第三方服务，让好内容有个去处。":
      "Star favorite articles or save them to a third-party service configured in Miniflux. Give good stories somewhere to stay.",
    收藏与分享: "Save and share",
    "打开浏览器，就在。": "A browser is all you need.",
    "以桌面阅读为核心，也支持移动浏览器与 PWA 安装。中、英、土、法，多语言可选。":
      "Built for desktop reading, with mobile browser and PWA support. Available in English, Chinese, Turkish, and French.",
    "网页与 PWA": "Web and PWA",
    "04 / 你的订阅，由你做主": "04 / YOUR FEEDS. YOUR CHOICE.",
    "阅读很自由。": "Freedom to read.",
    "数据也应该。": "Freedom to own it.",
    "Nextflux 专注做好阅读界面，Miniflux 负责订阅与数据。":
      "Nextflux takes care of reading. Miniflux takes care of your feeds and data.",
    "连接你自己的服务器，把阅读世界握在自己手里。":
      "Connect your own server and keep your reading world in your hands.",
    "代码公开，欢迎一起打磨": "Open code. Make it better with us.",
    你的阅读体验: "Your reading experience",
    你的服务器与数据: "Your server and data",
    "前端轻巧，后端自主。": "A light client. A backend you own.",
    "05 / 开始你的阅读时光": "05 / YOUR NEXT GOOD READ",
    "下一篇好文章，": "Your next good read",
    "从这里开始。": "starts here.",
    "已经有 Miniflux？": "Already have Miniflux?",
    "打开 Nextflux，填写服务器地址，":
      "Open Nextflux and enter your server address.",
    "使用 API Token 或用户名与密码登录。":
      "Sign in with an API token or your username and password.",
    开始阅读: "Start reading",
    "想部署自己的版本？": "Want to host your own?",
    "支持 Docker 与 Cloudflare Pages。":
      "Deploy with Docker or Cloudflare Pages.",
    "一个命令，给阅读一个自己的家。":
      "One command to give reading a home of its own.",
    查看部署方式: "Deployment options",
    "Nextflux 是 Miniflux 的客户端，使用前需要一个可访问的 Miniflux 服务。":
      "Nextflux is a Miniflux client. You'll need a reachable Miniflux server to get started.",
    "还有一点，你可能想知道。": "A few things you might be wondering.",
    读之前的: "Before you",
    "小问题。": "settle in.",
    "Nextflux 是独立的 RSS 服务吗？": "Is Nextflux a standalone RSS service?",
    "Nextflux 是 Miniflux 的网页客户端。订阅抓取、文章与阅读状态由 Miniflux 保存，Nextflux 提供阅读和订阅管理界面。你需要先准备 Miniflux 服务器。":
      "Nextflux is a web client for Miniflux. Miniflux fetches your feeds and stores articles and reading status, while Nextflux provides the reading and feed management interface. You'll need a Miniflux server first.",
    "需要下载安装吗？": "Do I need to install anything?",
    "使用现代浏览器打开即可。Nextflux 也支持 PWA，可通过支持此功能的浏览器安装到桌面或主屏幕。":
      "Just open it in a modern browser. Nextflux also supports PWA installation, so compatible browsers can add it to your desktop or home screen.",
    "可以从其他阅读器迁移订阅吗？": "Can I bring feeds from another reader?",
    "可以。将原阅读器的订阅导出为 OPML，再在 Nextflux 中导入。Nextflux 也支持 OPML 导出与设置备份；文章内容与阅读状态迁移需要备份 Miniflux 数据库。":
      "Yes. Export your subscriptions as OPML, then import them in Nextflux. You can also export OPML and back up settings. Moving articles and reading status requires a Miniflux database backup.",
    "在手机上也能使用吗？": "Can I use it on my phone?",
    "支持移动浏览器，但项目以桌面体验为核心。如果你偏好手机原生体验，也可以用支持 Miniflux 的 Unread、Reeder 等客户端连接同一服务器。":
      "Mobile browsers are supported, though Nextflux is designed primarily for desktop reading. If you prefer a native mobile app, connect a Miniflux-compatible reader such as Unread or Reeder to the same server.",
    "为好内容。为好奇心。为阅读本身。":
      "For good stories. For curiosity. For the joy of reading.",
    "部署文档 ↗": "Deployment docs ↗",
    "一个开源的 Miniflux 客户端。": "An open-source Miniflux client.",
    关闭部署说明: "Close deployment instructions",
    给阅读一个自己的家: "A home of your own for reading",
    "部署 Nextflux": "Deploy Nextflux",
    "已有 Miniflux 服务？运行下面的命令，然后访问":
      "Already running Miniflux? Run this command, then visit",
    复制命令: "Copy command",
    "Cloudflare Pages 部署": "Deploy on Cloudflare Pages",
    "同时部署 Miniflux": "Deploy with Miniflux",
    "首次登录时，输入 Miniflux 服务器地址及登录凭据。跨域访问需要服务器允许相应的请求。":
      "Enter your Miniflux server address and credentials when signing in for the first time. Your server must allow the relevant cross-origin requests.",
    "已复制，可以粘贴到终端运行。":
      "Copied. Paste it into your terminal to run.",
    "已复制 ✓": "Copied ✓",
    "无法访问剪贴板，请选中上方命令手动复制。":
      "Clipboard access is unavailable. Select the command above and copy it manually.",
  };
  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const textBindings = [];
  const walker = document.createTreeWalker(
    document.documentElement,
    NodeFilter.SHOW_TEXT,
  );
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest("script, style")) continue;
    const key = normalize(node.data);
    if (Object.hasOwn(english, key))
      textBindings.push({ node, zh: node.data, en: english[key] });
  }
  const attributeBindings = [];
  document
    .querySelectorAll(
      "[aria-label], [aria-roledescription], [alt], meta[name='description']",
    )
    .forEach((element) => {
      for (const attribute of [
        "aria-label",
        "aria-roledescription",
        "alt",
        "content",
      ]) {
        const zh = element.getAttribute(attribute);
        if (zh && Object.hasOwn(english, normalize(zh)))
          attributeBindings.push({
            element,
            attribute,
            zh,
            en: english[normalize(zh)],
          });
      }
    });
  let language = "en";
  try {
    const savedLanguage = localStorage.getItem("nextflux-home-language");
    if (savedLanguage === "zh" || savedLanguage === "en")
      language = savedLanguage;
  } catch {}
  function t(value) {
    return language === "en" ? (english[normalize(value)] ?? value) : value;
  }
  function setLanguage(next) {
    language = next === "en" ? "en" : "zh";
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    textBindings.forEach(({ node, zh, en }) => {
      node.data = language === "en" ? en : zh;
    });
    attributeBindings.forEach(({ element, attribute, zh, en }) =>
      element.setAttribute(attribute, language === "en" ? en : zh),
    );
    document
      .querySelectorAll("[data-language]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.language === language),
        ),
      );
    try {
      localStorage.setItem("nextflux-home-language", language);
    } catch {}
    document.dispatchEvent(new CustomEvent("languagechange"));
  }
  document
    .querySelectorAll("[data-language]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        setLanguage(button.dataset.language),
      ),
    );
  setLanguage(language);
  return {
    t,
    setLanguage,
    get language() {
      return language;
    },
  };
})();
