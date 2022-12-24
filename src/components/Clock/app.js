const secondsHandle = document.getElementsByClassName(`seconds-hand`);
const minutesHandle = document.getElementsByClassName(`minutes-hand`);
const hoursHandle = document.getElementsByClassName(`hours-hand`);

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;

  secondsHandle.style.transform = `rotate(` + seconds * timeInterval + `deg)`;
  minutesHandle.style.transform =
    `rotate(` + (minutes * timeInterval + seconds / 10) + `deg)`;
  hoursHandle.style.transform = `rotate(` + (hours * 30 + minutes / 2) + `deg)`;
}

setInterval(getTime, 100);
