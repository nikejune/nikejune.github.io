const timer = document.querySelector("#timer");

function refrsehTimer() {
  const nowDate = new Date();
  const hour = String(nowDate.getHours()).padStart(2, "0");
  const min = String(nowDate.getMinutes()).padStart(2, "0");
  const sec = String(nowDate.getSeconds()).padStart(2, "0");

  timer.innerText = `${hour}:${min}:${sec}`;
}

refrsehTimer();
setInterval(refrsehTimer, 1000);
