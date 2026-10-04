const header = document.querySelector(".header");
let headerScrollAnchor = Math.max(0, window.scrollY);
let headerScrollPending = false;
function updateHeaderVisibility() {
  const position = Math.max(0, window.scrollY);
  const delta = position - headerScrollAnchor;
  if (
    position <= header.offsetHeight ||
    header.contains(document.activeElement)
  ) {
    header.classList.remove("is-hidden");
    headerScrollAnchor = position;
  } else if (Math.abs(delta) >= 8) {
    header.classList.toggle("is-hidden", delta > 0);
    headerScrollAnchor = position;
  }
  headerScrollPending = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!headerScrollPending) {
      headerScrollPending = true;
      window.requestAnimationFrame(updateHeaderVisibility);
    }
  },
  { passive: true },
);
header.addEventListener("focusin", () => {
  header.classList.remove("is-hidden");
  headerScrollAnchor = Math.max(0, window.scrollY);
});

const preview = document.querySelector("#preview");
const deployDialog = document.querySelector("#deploy-dialog");
const articleDemo = document.querySelector("#article-demo");
let fontSize = 15;
let previewTheme = "light";
let copyState = "";
let commandCopied = false;

document.querySelectorAll("[data-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-theme]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    preview.src = `assets/nextflux-${button.dataset.theme}.png`;
    previewTheme = button.dataset.theme;
    updatePreviewLabel();
  });
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
    copyState = "已复制，可以粘贴到终端运行。";
    commandCopied = true;
    status.textContent = siteI18n.t(copyState);
    document.querySelector("#copy-command").textContent =
      siteI18n.t("已复制 ✓");
  } catch {
    copyState = "无法访问剪贴板，请选中上方命令手动复制。";
    status.textContent = siteI18n.t(copyState);
  }
});

// Keep a fixed stage height so switching portrait and landscape views does not move the page.
const layoutCarousel = document.querySelector(".layout-carousel");
const layoutSlides = [...document.querySelectorAll(".layout-slide")];
const layoutButtons = [...document.querySelectorAll("[data-layout]")];
const layoutNames = ["宽屏三栏", "紧凑双栏", "订阅与列表", "专注正文"];
let layoutIndex = 0;
let layoutAnimations = [];
function showLayout(index) {
  const previousIndex = layoutIndex;
  const direction = index > previousIndex ? 1 : -1;
  layoutAnimations.forEach((animation) => animation.cancel());
  layoutAnimations = [];
  layoutIndex = (index + layoutSlides.length) % layoutSlides.length;
  layoutSlides.forEach((slide, i) => {
    slide.hidden = i !== layoutIndex;
    slide.setAttribute("aria-hidden", String(i !== layoutIndex));
  });
  if (
    previousIndex !== layoutIndex &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    typeof layoutSlides[layoutIndex].animate === "function"
  ) {
    const outgoing = layoutSlides[previousIndex];
    const incoming = layoutSlides[layoutIndex];
    outgoing.hidden = false;
    const timing = { duration: 340, easing: "cubic-bezier(0.22, 1, 0.36, 1)" };
    const exit = outgoing.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: `translateX(${-direction * 22}px)` },
      ],
      timing,
    );
    const enter = incoming.animate(
      [
        { opacity: 0, transform: `translateX(${direction * 22}px)` },
        { opacity: 1, transform: "translateX(0)" },
      ],
      timing,
    );
    exit.onfinish = () => {
      outgoing.hidden = true;
    };
    layoutAnimations = [exit, enter];
  }
  layoutButtons.forEach((button, i) =>
    button.setAttribute("aria-pressed", String(i === layoutIndex)),
  );
  document.querySelector("#layout-name").textContent = siteI18n.t(
    layoutNames[layoutIndex],
  );
  document.querySelector("#layout-count").textContent =
    `${String(layoutIndex + 1).padStart(2, "0")} / 04`;
}
document
  .querySelector("#layout-prev")
  .addEventListener("click", () => showLayout(layoutIndex - 1));
document
  .querySelector("#layout-next")
  .addEventListener("click", () => showLayout(layoutIndex + 1));
layoutButtons.forEach((button) =>
  button.addEventListener("click", () =>
    showLayout(Number(button.dataset.layout)),
  ),
);
layoutCarousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showLayout(layoutIndex + (event.key === "ArrowRight" ? 1 : -1));
  }
});
const layoutStage = document.querySelector(".carousel-stage");
let swipeStart = null;
layoutStage.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch" || event.pointerType === "pen")
    swipeStart = { x: event.clientX, y: event.clientY };
});
layoutStage.addEventListener("pointerup", (event) => {
  if (!swipeStart) return;
  const dx = event.clientX - swipeStart.x;
  const dy = event.clientY - swipeStart.y;
  swipeStart = null;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy))
    showLayout(layoutIndex + (dx < 0 ? 1 : -1));
});
layoutStage.addEventListener("pointercancel", () => {
  swipeStart = null;
});

function updatePreviewLabel() {
  preview.alt = siteI18n.t(
    `Nextflux ${previewTheme === "dark" ? "深色" : "浅色"}真实界面：分类订阅、文章列表与图文阅读三栏布局`,
  );
}
function refreshLocalizedState() {
  updatePreviewLabel();
  showLayout(layoutIndex);
  document.querySelector("#copy-status").textContent = siteI18n.t(copyState);
  document.querySelector("#copy-command").textContent = siteI18n.t(
    commandCopied ? "已复制 ✓" : "复制命令",
  );
}
document.addEventListener("languagechange", refreshLocalizedState);
refreshLocalizedState();
