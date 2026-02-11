const input = document.querySelector('#timer');
const submit_btn = document.querySelector('#submit-btn');

let countdown;      // store countdown interval
let totalSeconds = 0;

/* -------- PERMANENT CLOCK -------- */
function updateClock() {
    const now = new Date();

    document.querySelector('#clock-hours').innerText = String(now.getHours()).padStart(2,'0');
    document.querySelector('#clock-minutes').innerText = String(now.getMinutes()).padStart(2,'0');
    document.querySelector('#clock-seconds').innerText = String(now.getSeconds()).padStart(2,'0');
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();  // initial call

/* -------- COUNTDOWN TIMER -------- */
function setTimer() {
    clearInterval(countdown); // stop any previous countdown

    let minutesInput = parseInt(input.value);
    if (isNaN(minutesInput) || minutesInput <= 0) return;

    totalSeconds = minutesInput * 60;

    countdown = setInterval(() => {
        let hrs = Math.floor(totalSeconds / 3600);
        let mins = Math.floor((totalSeconds % 3600) / 60);
        let secs = totalSeconds % 60;

        document.querySelector('#timer-hours').innerText = String(hrs).padStart(2,'0');
        document.querySelector('#timer-minutes').innerText = String(mins).padStart(2,'0');
        document.querySelector('#timer-seconds').innerText = String(secs).padStart(2,'0');

        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}

submit_btn.addEventListener('click', setTimer);
