const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const calcDegrees = (currTime, maxTime) => ((currTime / maxTime) * 360) + 90;

setInterval(() => {
const date = new Date();
const secondHandDegrees = calcDegrees(date.getSeconds(), 60);
const minuteHandDegrees = calcDegrees(date.getMinutes(), 60);
const hourHandDegrees = calcDegrees(date.getHours(), 12);

      secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
      hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}, 1000);