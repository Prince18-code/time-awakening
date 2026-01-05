const clock = document.getElementById('clock');
const dateEl = document.getElementById('date');
const quoteEl = document.getElementById('quote');

let timer = null;
let typingTimer = null;

/* ENGLISH DARK MESSAGE */
const message =
`Time is running out.
And you are moving too slowly.

Life does not pause.
But you did.

Every second that passes
will never return.

Wake up.
Do not waste time here.`;

/* CLOCK */
const updateclock = () => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  clock.innerText = `${h}:${m}:${s}`;
};

/* DATE */
const updatedate = () => {
  const now = new Date();
  let d = now.getDate();
  let m = now.getMonth() + 1;
  let y = now.getFullYear();

  d = d < 10 ? '0' + d : d;
  m = m < 10 ? '0' + m : m;

  dateEl.innerText = `${d}/${m}/${y}`;
};

/* TYPE EFFECT */
const startTyping = () => {
  quoteEl.innerText = '';
  let i = 0;

  clearInterval(typingTimer);

  typingTimer = setInterval(() => {
    quoteEl.innerText += message[i];
    i++;

    if (i >= message.length) {
      clearInterval(typingTimer);
    }
  }, 55);
};

/* START */
const startClock = () => {
  if (timer !== null) return;

  updateclock();
  updatedate();
  startTyping();

  timer = setInterval(() => {
    updateclock();
    updatedate();
  }, 1000);
};

/* STOP */
const stopClock = () => {
  clearInterval(timer);
  clearInterval(typingTimer);
  timer = null;
};

document.getElementById('start').addEventListener('click', startClock);
document.getElementById('stop').addEventListener('click', stopClock);
