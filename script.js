const preview = document.querySelector("#preview");
const imageDialog = document.querySelector("#image-dialog");
const deployDialog = document.querySelector("#deploy-dialog");
const articleDemo = document.querySelector("#article-demo");
let fontSize = 15;

document.querySelectorAll("[data-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-theme]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    preview.src = `assets/nextflux-live-${button.dataset.theme}.jpg`;
    preview.alt = `Nextflux ${button.dataset.theme === "dark" ? "深色" : "浅色"}真实界面：分类订阅、文章列表与图文阅读三栏布局`;
  });
});
document.querySelector("#hero-screen").addEventListener("click", () => {
  document.querySelector("#dialog-image").src = preview.src;
  imageDialog.showModal();
});
document
  .querySelector("#open-deploy")
  .addEventListener("click", () => deployDialog.showModal());
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
});
document.querySelectorAll("[data-font]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-font]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    articleDemo.classList.toggle("sans", button.dataset.font === "sans");
  });
});
function changeFontSize(delta) {
  fontSize = Math.min(19, Math.max(12, fontSize + delta));
  articleDemo.style.setProperty("--article-size", `${fontSize}px`);
  document.querySelector("#font-smaller").disabled = fontSize === 12;
  document.querySelector("#font-larger").disabled = fontSize === 19;
}
document
  .querySelector("#font-smaller")
  .addEventListener("click", () => changeFontSize(-1));
document
  .querySelector("#font-larger")
  .addEventListener("click", () => changeFontSize(1));
document.querySelector("#copy-command").addEventListener("click", async () => {
  const command =
    "docker run -d --name nextflux -p 3000:3000 --restart unless-stopped electh/nextflux:latest";
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(command);
    status.textContent = "已复制，可以粘贴到终端运行。";
    document.querySelector("#copy-command").textContent = "已复制 ✓";
  } catch {
    status.textContent = "无法访问剪贴板，请选中上方命令手动复制。";
  }
});
