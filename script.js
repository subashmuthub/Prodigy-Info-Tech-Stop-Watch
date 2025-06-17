let [hours, minutes, seconds] = [0, 0, 0];
let timer = document.getElementById("time");
let interval = null;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timer.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!interval) {
    interval = setInterval(updateTime, 1000);
  }
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  timer.innerText = "00:00:00";
  document.getElementById("lapList").innerHTML = "";
}

function lap() {
  const lapTime = timer.innerText;
  const lapList = document.getElementById("lapList");
  const li = document.createElement("li");
  li.textContent = `Lap - ${lapTime}`;
  lapList.appendChild(li);
}
