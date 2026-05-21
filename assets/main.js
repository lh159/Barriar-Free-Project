const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".video-placeholder").forEach((placeholder) => {
  const src = placeholder.dataset.videoSrc;

  if (src) {
    fetch(src, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          return;
        }

        const video = document.createElement("video");
        video.controls = true;
        video.preload = "metadata";
        video.src = src;
        video.setAttribute("aria-label", placeholder.dataset.videoLabel || "功能视频");
        placeholder.replaceChildren(video);
        placeholder.classList.add("has-video");
      })
      .catch(() => {});
  }

  placeholder.addEventListener("click", () => {
    const label = placeholder.dataset.videoLabel || "功能";
    const src = placeholder.dataset.videoSrc || "videos/example.mp4";
    const hint = placeholder.querySelector("span");
    if (hint) {
      hint.textContent = `${label}视频预留路径：${src}`;
    }
  });
});
