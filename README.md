# Nextflux 门户页

以「让阅读，回到阅读。」为主线的中文产品门户。暖白与珊瑚色、宋体标题、真实界面截图，以阅读体验、自定义主题、快捷操作、订阅管理和自托管能力展开。

## 本地预览

```sh
npm run dev
```

访问 http://localhost:4173。无需安装依赖。

```sh
npm run check
npm run build
```

`dist/` 可直接发布到静态网站托管平台。源文件为 `index.html`、`style.css`、`script.js`，截图位于 `assets/`。

## 交互

- 日间／夜间真实截图切换，点击放大，Esc 关闭。
- 阅读示例支持宋体／黑体与字号调整。
- Docker 部署弹窗与复制命令。
- FAQ 折叠面板、锚点导航、手机适配、键盘焦点与减弱动画。

截图与图标取自本地 Nextflux 项目；功能文案依据该项目 README 和中文配置。文章排版示例为门户演示文案。Nextflux 本身需要 Miniflux 服务，在线入口指向 https://nextflux.pages.dev/。

设计参考：

- https://www.goldenhillsoftware.com/unread/
- https://reeder.app/
- https://www.apple.com/macbook-air/
