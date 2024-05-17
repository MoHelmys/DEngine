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

// mobile nav toggle
const menuBtn = document.getElementById("mobile-nav-btn");
const menuOverlay = document.getElementById("mnav-menu-overlay");
menuBtn.addEventListener("click", () => {
  document.getElementById("menu-btn").classList.toggle("hidden");
  document.getElementById("close-btn").classList.toggle("hidden");
  document
    .getElementById("mnav-menu-item")
    .classList.toggle("-translate-x-[100vw]");
});
if (menuOverlay) {
  menuOverlay.addEventListener("click", () => {
    document.getElementById("menu-btn").classList.toggle("hidden");
    document.getElementById("close-btn").classList.toggle("hidden");
    document
      .getElementById("mnav-menu-item")
      .classList.toggle("-translate-x-[100vw]");
  });
}

// parallax

function mouseMoveParallax(selectorId) {
  let scene = document.getElementById(`${selectorId}`);
  if (scene) {
    let parallaxInstance = new Parallax(scene);
  }
}

mouseMoveParallax("parallax-mouse");

// dynamic height for vertical swiper

const h2VerticalSwiper = document.querySelector("#h2-vertical-swiper");
if (h2VerticalSwiper) {
  h2VerticalSwiper.style.height =
    h2VerticalSwiper.firstElementChild.firstElementChild.clientHeight + "px";
}

// toggle options

const optionInput = document.getElementById("option");

if (optionInput) {
  optionInput.addEventListener("focus", (e) => {
    e.target.nextElementSibling.classList.remove("hidden");
  });
  optionInput.addEventListener("blur", (e) => {
    e.target.nextElementSibling.classList.add("hidden");
  });
}
