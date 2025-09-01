let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;

const min = document.getElementById("min");
const sec = document.getElementById("sec");
const mili = document.getElementById("mili");

const renderTimer = () => {
    min.innerHTML = String(minutes).padStart(2, '0');
    sec.innerHTML = String(seconds).padStart(2, '0');
    mili.innerHTML = String(miliseconds).padStart(2, '0');
};

renderTimer();

const timer = () => {
    miliseconds++;
    if (miliseconds === 100) {
        miliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    renderTimer();
};

const start = () => {
    if (!interval) {
        interval = setInterval(timer, 10);
    }
};

const pause = () => {
    clearInterval(interval);
    interval = null;
};

const reset = () => {
    pause();
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    renderTimer();
};
