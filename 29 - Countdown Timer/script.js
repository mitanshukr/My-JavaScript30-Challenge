let timeCount;
let alarmTone;
let audio = new Audio("carol_of_the_bells-alarm.mp3");

const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const resetBtn = document.querySelector(".reset");
const pauseBtn = document.querySelector(".pause");

function timer(seconds) {
  clearInterval(timeCount); //clear any existing timer.
  const then = Date.now() + seconds * 1000;
  //Date.now() gives total milliseconds elapsed from January 1, 1970 to till time. check mdn.
  displayTimeLeft(seconds);
  displayEndTime(then);
  resetBtn.classList.add("displayReset");
  pauseBtn.classList.add("displayReset");

  timeCount = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft == 0) {
      alarm();
    }
    if (secondsLeft < 0) {
      clearInterval(timeCount);
      return;
    }
    displayTimeLeft(secondsLeft);
    changeColor();
  }, 1000);
}

function displayTimeLeft(secondsLeft) {
  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  const display = `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timeStamp) {
  const time = new Date(timeStamp);
  const hour = time.getHours();
  const minute = time.getMinutes();
  endTime.textContent = `Get back by ${hour > 12 ? hour - 12 : hour}:${
    minute < 10 ? "0" : ""
  }${minute}`;
}

function alarm() {
  audio.play();
  pauseBtn.classList.add("disablePauseBtn");
  endTime.textContent = "It's not over. It is Now!";

  alarmTone = setInterval(() => {
    audio.currentTime = 0;
    audio.play();
  }, 17000);
  //please note: the audio is apx. 28sec long.
}

let hue1 = 0;
let hue2 = 0;
const changeColor = () => {
  hue1 >= 360 ? (hue1 = 0) : (hue1 = hue1 + 3);
  hue2 >= 360 ? (hue2 = 0) : (hue2 = hue2 + 6);
  //hue color: hsl(hue, saturation, lightness)
  document.documentElement.style.background = `linear-gradient(45deg,hsl(${hue1}, 90%, 61%) 0%,hsl(${hue2}, 60%, 55%) 50%,hsl(216, 27%, 41%) 100%)`;
};

//Custom Timer Input.
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isNaN(+this.minutes.value)) {
    alert("Invalid Input. Please enter a number.");
    this.reset();
    return;
  }
  const inputMin = +this.minutes.value;
  const inSeconds = inputMin * 60;
  timer(inSeconds);
  this.reset();
});

resetBtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
  clearInterval(alarmTone);
  clearInterval(timeCount);
  timerDisplay.textContent = `0:00`;
  endTime.textContent = "\xA0";
  //'\u00a0' can also be used. These are hexadecimal
  //and unicode notations(respectively), equivalent to &nbsp; in html.
  document.title = `0:00`;
  resetBtn.classList.remove("displayReset");
  pauseBtn.classList.remove("displayReset", "disablePauseBtn");
});

pauseBtn.addEventListener("click", function () {
  if (pauseBtn.textContent === "PAUSE") {
    clearInterval(timeCount);
    endTime.textContent = "Time is still Ticking. Just Reminding!";
    pauseBtn.textContent = "RESUME";
    document.title += ` - Paused`;
  } else if (pauseBtn.textContent === "RESUME") {
    pauseBtn.textContent = "PAUSE";
    let [remainingMin, remainingSec] = timerDisplay.textContent.split(":");
    remainingMin = +remainingMin;
    remainingSec = +remainingSec;
    const remainingTime =
      remainingMin > 0 ? remainingMin * 60 + remainingSec : remainingSec;
    timer(remainingTime);
  }
});

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    timer(+this.dataset.time);
  })
);

// --------------------------------- //
const alert = document.querySelector('.alertPopup');

function closepopup() {
  alert.style.display = 'none';
}
