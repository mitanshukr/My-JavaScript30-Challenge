const initialControl = document.querySelector(".initialControl");
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const timeElapse = player.querySelector(".video__timeElapse");
const videoDuration = player.querySelector(".video__duration");
const playbackRate = player.querySelector(".playbackRate");
const fullscreen = player.querySelector(".player__fullscreen");

function toggleFullscreen() {
  if (video.requestFullScreen) {
    video.requestFullScreen();
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  }
}

function getFormattedTime(seconds) {
  const minute = Math.floor(seconds / 60);
  seconds = Math.round(seconds % 60);
  return `${padZero(minute)}:${padZero(seconds)}`;

  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }
}

function togglePlay() {
  if (window.innerHeight == video.offsetHeight) return; //user is fullscreen!
  video.paused ? video.play() : video.pause();
  videoDuration.textContent = getFormattedTime(video.duration);
}

function toggleButton() {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
  if (this.paused) {
    //controlling initial top button
    initialControl.textContent = "►";
    initialControl.classList.remove("adjustBtnPosition", "hideButton");
  } else {
    initialControl.textContent = "❚❚";
    initialControl.classList.add("adjustBtnPosition");
    setTimeout(() => {
      initialControl.classList.add("hideButton");
    }, 100);
  }
}

function handleProgress(e) {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  timeElapse.textContent = getFormattedTime(video.currentTime);
}

function handleRangeUpdate(e) {
  video[this.name] = this.value;
  if (this.name === "playbackRate") playbackRate.textContent = `${this.value}x`;
}

function skip() {
  video.currentTime += +this.dataset.skip;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", toggleButton);
video.addEventListener("pause", toggleButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => {
  mousedown = true;
});
progress.addEventListener("mouseup", () => {
  mousedown = false;
});
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
//progress.addEventListener('mouseout', () => { mousedown = false});
//progress.addEventListener('mouseenter', () => { mousedown ? scrub : ""});

fullscreen.addEventListener("click", toggleFullscreen);
