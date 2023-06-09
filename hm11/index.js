let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");

hours = 0;
minutes = 0;
seconds = 0;
milliseconds = 0;

let timerId;

const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const millisecondsSpan = document.getElementById("milliseconds");
const startBtn = document.querySelector("#btn button");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");
const reverseBtn = document.getElementById("reverse");
const saveList = document.getElementById("saveList");

let isRunning = false;

function updateTimer() {
  hoursSpan.textContent = hours.toString().padStart(2, "0");
  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");
  millisecondsSpan.textContent = milliseconds.toString().padStart(3, "0");
}

function updateButton() {
  if (isRunning) {
    startBtn.textContent = "Stop";
  } else {
    startBtn.textContent = "Start";
  }
}

function startTimer() {
  milliseconds++;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateTimer();
}
function start() {
  timerId = setInterval(startTimer, 1);
  if (!isRunning) {
    timerId = setInterval(startTimer, 1);
    isRunning = true;
  } else {
    stop();
    isRunning = false;
  }
}
function stop() {
  clearInterval(timerId);
}
function reset() {
  stop();
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTimer();
  saveList.innerHTML = "";
}
function saveTime() {
  const li = document.createElement("li");
  li.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  saveList.appendChild(li);
}
function reverseTimer() {
  // Если таймер уже запущен, то останавливаем его и меняем направление
  if (timerId) {
    stop();
    timerId = setInterval(reverseStartTimer, 1);
  } else {
    reverseStartTimer();
  }
}
function reverseStartTimer() {
  milliseconds--;
  if (milliseconds < 0) {
    milliseconds = 999;
    seconds--;
  }
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    minutes = 59;
    hours--;
  }
  if (hours < 0) {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
  }
  updateTimer();
}
startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
saveBtn.addEventListener("click", saveTime);
reverseBtn.addEventListener("click", reverseTimer);
updateTimer();
