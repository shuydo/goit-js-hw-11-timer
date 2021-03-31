// const end = new Date('apr 17, 2021').getTime();
// let end = new Date("apr 17, 2021").getTime() + 33000;
let end;
// end = (1 * 24 * 3600 + 1 * 3600 + 1 * 60 + 1)*1000;
// end /= 1000;
// end = Date.now() + 1503485000;
// end = Date.now() + (1 * 24 * 3600 + 1 * 3600 + 1 * 60 + 1)*1000;

let days, hours, mins, secs, time;
const pad = value => String(value).padStart(2, '0');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    const clockface = document.querySelector(selector);

    end = new Date(targetDate).getTime();

    this.intervalId = setInterval(() => {
      time = Math.floor((end - Date.now()) / 1000);

      if (!(time >= 0)) {
        return clearInterval(this.intervalId);
      }

      secs = time % 60;
      mins = ((time - secs) % 3600) / 60;
      days = Math.floor(time / 24 / 3600);
      hours = Math.floor((time - days * 3600 * 24) / 3600);

      // --------- orig+ -------------
      //   time *= 1000;

      // const days = Math.floor(time / (1000 * 60 * 60 * 24));
      // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      // const secs = Math.floor((time % (1000 * 60)) / 1000);
      // ------------------------

      // updateClockface({ days, hours, mins, secs });

      const dayRef = document.querySelector(selector + ' [data-value="days"]');
      const hoursRef = document.querySelector(
        selector + ' [data-value="hours"]',
      );
      const minsRef = document.querySelector(selector + ' [data-value="mins"]');
      const secsRef = document.querySelector(selector + ' [data-value="secs"]');

      dayRef.textContent = days;
      hoursRef.textContent = pad(hours);
      minsRef.textContent = pad(mins);
      secsRef.textContent = pad(secs);
    }, 1000);
  }
}
const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date("Jul 17, 2021"),
    // targetDate: new Date('apr 1, 2021')
        // - (21 * 3600 + 7 * 60 + 20) * 1000,
});

// const timer2 = new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("apr 17, 2021"),
// });

// const secsRef2 = document.getElementsByName('data-value');
// console.log(secsRef2);
// getElementsByName
