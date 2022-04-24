const countdown = () => {
  const countDate = new Date("May 21, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Time calculation
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate no. of days
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById("days").textContent = textDay;
  document.getElementById("hours").textContent = textHour;
  document.getElementById("minutes").textContent = textMinute;
  document.getElementById("seconds").textContent = textSecond;
};

setInterval(countdown, 1000);
