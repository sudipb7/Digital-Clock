let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let clock = setInterval(() => {
  let date = new Date();
  hours.innerText = date.getHours();
  minutes.innerText = date.getMinutes();
  seconds.innerText = date.getSeconds();
}, 1000);

clock();