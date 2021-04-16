import markUp from './template.js';
let timer = 0;
let days, hours, mins, secs, time;
const pad = value => String(value).padStart(2, '0');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    const end = new Date(targetDate).getTime();

    document.body.insertAdjacentHTML('afterbegin', markUp);

    let timerRef = document.getElementById('timer'); //
    timerRef.id = selector.slice(1); // подмена id
    timerRef = document.getElementById(timerRef.id); //

    const dayRef = document.querySelector(selector + ' [data-value="days"]');
    const hoursRef = document.querySelector(selector + ' [data-value="hours"]');
    const minsRef = document.querySelector(selector + ' [data-value="mins"]');
    const secsRef = document.querySelector(selector + ' [data-value="secs"]');
    const wordsRef = document.querySelectorAll(selector + ' span');

    this.intervalId = setInterval(() => {
      time = Math.floor((end - Date.now()) / 1000);

      if (!(time >= 0)) {
        return clearInterval(this.intervalId);
      }

      secs = time % 60;
      mins = ((time - secs) % 3600) / 60;
      days = Math.floor(time / 24 / 3600);
      hours = Math.floor((time - days * 3600 * 24) / 3600);

      dayRef.textContent = days;
      hoursRef.textContent = pad(hours);
      minsRef.textContent = pad(mins);
      secsRef.textContent = pad(secs);

      wordsRef[1].textContent = pad(days)[1] === '1' ? 'Day' : 'Days';
      wordsRef[3].textContent = pad(hours)[1] === '1' ? 'Hour' : 'Hours';
      wordsRef[5].textContent = pad(mins)[1] === '1' ? 'Minute' : 'Minutes';
      wordsRef[7].textContent = pad(secs)[1] === '1' ? 'Second' : 'Seconds';
    }, 1000);
  }
}

const btnRef = document.getElementById('js-button');
const inputRef = document.getElementById('js-input');
inputRef.value = new Date().toISOString().substring(0, 10);

btnRef.addEventListener('click', createNewTimer);

function createNewTimer() {
  if (new Date().toISOString().substring(0, 10) === inputRef.value) return;

  timer += 1;
  console.log(inputRef.value, new Date().toISOString().substring(0, 10));
  const timer1 = new CountdownTimer({
    selector: '#timer-' + timer,
    targetDate: new Date(inputRef.value),
  });
}
