let vWrapper = document.createElement("div");

vWrapper.classList.add("v-wrapper");
vWrapper.classList.add("v-modal");
vWrapper.setAttribute("id", "video-modal");
vWrapper.innerHTML = ` <button id="v-close" class="v-close-btn">X</button> <div class="v-player video-ratio"> <iframe class="h-full w-full" src="https://www.youtube.com/embed/fzWzPXEhPvA?si=2wd3NcmWduVMlgB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen > </iframe> </div>`;

const playBtn = document.getElementById("play-video");

if (playBtn) {
  playBtn.addEventListener("click", () => {
    document.body.appendChild(vWrapper);
    const videoModal = document.getElementById("video-modal");
    document.getElementById("v-close").addEventListener("click", () => {
      videoModal.remove();
    });
    videoModal.addEventListener("click", () => {
      videoModal.remove();
    });
  });
}
