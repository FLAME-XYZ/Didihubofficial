const superCepatTimer = document.getElementById('super-cepat-timer');
const cepatTimer = document.getElementById('cepat-timer');
const standarTimer = document.getElementById('standar-timer');
const historyList = document.getElementById('history-list');
const superCepatBtn = document.getElementById('super-cepat-btn');
const cepatBtn = document.getElementById('cepat-btn');
const standarBtn = document.getElementById('standar-btn');

let countdown = 30;
let interval;
let betAmount = 0;
let selectedColor = null;
let activeTimer = 'super-cepat';

function startCountdown() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(interval);
            generateResult();
            resetCountdown();
            startCountdown();
        } else {
            countdown--;
            updateCountdown();
        }
    }, 1000);
}

function updateCountdown() {
    const time = countdown < 30 ? '0' + countdown : countdown;
    if (activeTimer === 'super-cepat') {
        superCepatTimer.textContent = `00:${time}`;
    } else if (activeTimer === 'cepat') {
        cepatTimer.textContent = `00:${time}`;
    } else if (activeTimer === 'standar') {
        standarTimer.textContent = `00:${time}`;
    }
}

function resetCountdown() {
    if (activeTimer === 'super-cepat') {
        countdown = 30;
    } else if (activeTimer === 'cepat') {
        countdown = 45;
    } else if (activeTimer === 'standar') {
        countdown = 60;
    }
}

function generateResult() {
    const result = Math.floor(Math.random() * 10);
    const resultColor = getResultColor(result);
    addToHistory(result, resultColor);
    checkBet(resultColor);
}

function getResultColor(result) {
    if (result === 0 || result === 5) {
        return 'purple';
    } else if (result === 1 || result === 3 || result === 7 || result === 9) {
        return 'green';
    } else {
        return 'red';
    }
}

function addToHistory(result, color) {
    const historyItem = document.createElement('div');
    historyItem.textContent = `Hasil: ${result}, Warna: ${color}`;
    historyList.prepend(historyItem);
}

function checkBet(resultColor) {
    if (selectedColor === resultColor) {
        alert(`Selamat! Anda menang taruhan sebesar ${betAmount}`);
    } else {
        alert(`Maaf, Anda kalah taruhan sebesar ${betAmount}`);
    }
}

document.getElementById('green').addEventListener('click', () => placeBet('green'));
document.get
