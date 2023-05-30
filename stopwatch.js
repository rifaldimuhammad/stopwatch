let stopwatch = document.querySelector('.stopwatch');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let secondEl = document.querySelector('.second');
let centiSecondEl = document.querySelector('.centisecond');

let second = 0;
let centiSecond = 0;

let intervalTimer;
btnStart.addEventListener('click', function () {
  intervalTimer = setInterval(() => {
    centiSecond++;
    centiSecondEl.innerHTML = centiSecond;
    secondEl.innerHTML = '00' + second;
    if (centiSecond > 100) {
      centiSecond = 0;
      second++;
    }
    if (second > 10) {
      secondEl.innerHTML = '0' + second;
    }
    if (second > 100) {
      secondEl.innerHTML = second;
    }
    if (second == 999 && centiSecond == 59) {
      clearInterval(intervalTimer);
    }
  }, 10);
});

btnStop.addEventListener('click', function () {
  clearInterval(intervalTimer);
});
btnReset.addEventListener('click', function () {
  second = 0;
  centiSecond = 0;
  secondEl.innerHTML = '000';
  centiSecondEl.innerHTML = '00';
  clearTimeout(intervalTimer);
});
