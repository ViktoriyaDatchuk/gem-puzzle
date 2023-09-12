import { minStor, secStor } from "./SaveToLocalStorage";

export let seconds = 0 + secStor;
export let minutes = 0 + minStor;
export let timeId;

export const timer = () => {
    seconds++;
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }
    const timeText = document.querySelector('#time h3');
    timeText.innerHTML = `Time: ${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
    startTimer();
}

export const startTimer = () => {
    timeId = window.setTimeout(timer, 1000);
}

export const resetTimer = () => {
    window.clearTimeout(timeId);
    minutes = 0;
    seconds = 0;
    const timeText = document.querySelector('#time h3');
    timeText.innerHTML = "Time: 00:00";
}