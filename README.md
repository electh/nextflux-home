# Nextflux 门户页

以「让阅读，回到阅读。」为主线的中英文产品门户。暖白与珊瑚色、宋体标题、真实界面截图，以阅读体验、自定义主题、快捷操作、订阅管理和自托管能力展开。

## 开发约定

网站发布到 GitHub Pages，不部署到 Sites。

在线访问：https://electh.github.io/nextflux-home/

推送到 `main` 后，`.github/workflows/pages.yml` 会自动检查、构建并发布 `dist/`。

## 本地预览

```sh
npm run dev
```

访问 http://localhost:4173。无需安装依赖。

```sh
npm run check
npm run build
```

`dist/` 可直接发布到静态网站托管平台。源文件为 `index.html`、`style.css`、`script.js`、`i18n.js`，截图位于 `assets/`。

## 交互

- Miniflux 高级功能展示区：使用真实设置截图，突出全文抓取、保留／屏蔽规则、内容重写与全局隐藏；文案已核对项目编辑订阅的实现。
- 导航栏支持中文／英文切换，记住语言选择；覆盖正文、弹窗、轮播、状态反馈与无障碍标签。截图内容保持原图。

- 日间／夜间原图切换，仅用于展示。
- 四张不同宽度截图轮播：箭头、页码、圆点、键盘方向键与触屏滑动。保持展示区域高度稳定，完整呈现原图。
- 阅读示例支持宋体／黑体与字号调整，下方展示真实阅读设置截图；功能区另设文章／订阅搜索截图与键盘操作说明。
- Docker 部署弹窗与复制命令。
- FAQ 折叠面板、锚点导航、手机适配、键盘焦点与减弱动画。

截图使用用户于 2026-10-04 提供的原始 PNG，包括浅色／深色主题的 Golden Hill Software 图文文章，以及四张不同宽度下的布局截图、高级订阅设置截图、阅读设置与搜索截图。原图保持不变，仅等比例缩放，不裁切、不叠加圆角、边框、阴影或旋转；保留原图自带的透明背景、圆角与阴影。高级订阅设置截图按用户要求例外：通过 CSS 增加 12px 圆角裁剪、细边框和柔和阴影，阅读设置截图使用 8px 圆角，搜索截图使用 14px 圆角，两者均加细边框与柔和阴影。PNG 源文件保持不变。图标取自本地 Nextflux 项目；功能文案依据该项目 README 和中文配置。文章排版示例为门户演示文案。Nextflux 本身需要 Miniflux 服务，在线入口指向 https://nextflux.pages.dev/。

设计参考：

- https://www.goldenhillsoftware.com/unread/
- https://reeder.app/
- https://www.apple.com/macbook-air/
