const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".video-placeholder").forEach((placeholder) => {
  placeholder.addEventListener("click", () => {
    const label = placeholder.dataset.videoLabel || "功能";
    const src = placeholder.dataset.videoSrc || "videos/example.mp4";
    placeholder.querySelector("span").textContent = `${label}视频预留路径：${src}`;
  });
});
