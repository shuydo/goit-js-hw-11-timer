// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });
const targetDate = new Date("mar 31, 2021");
console.log("targetDate parse", Date.parse(targetDate));

const date = Date.now();
console.log("date now:", date);

// console.log('time1.getDate:', time1.getDate());
// console.log('time1.getDate:', time1.getSeconds());

const pad = (value) => String(value).padStart(2, "0");

const time = targetDate - date;
console.log(time);

const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

// console.log(days, ":", pad(hours + 3), ":", pad(mins), ":", pad(secs));

const dayRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef  = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

dayRef.textContent = days;
hoursRef.textContent = pad(hours);
minsRef.textContent = pad(mins);
secsRef.textContent = pad(secs);


// console.log(secsRef);