const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minuteDegrees = (mins / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "";
  }
}

setInterval(setDate, 1000);
