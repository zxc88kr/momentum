const clock = document.querySelector("h2#clock");

function dDayCalculator() {
    const today = new Date();
    const yearInfo = today.getFullYear();
    const christmas = new Date(`${yearInfo}-12-25 00:00:00`);
    const diff = (christmas - today) > 0 ?
                 (christmas - today) :
                 (christmas - today) + (365 * 24 * 60 * 60 * 1000);
    const days = String(Math.floor(diff / (24 * 60 * 60 * 1000)));
    const hours = String(Math.floor(diff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))).padStart(2, "0");
    const minutes = String(Math.floor(diff % (60 * 60 * 1000) / (60 * 1000))).padStart(2, "0");
    const seconds = String(Math.floor(diff % (60 * 1000) / 1000)).padStart(2, "0");
    clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

dDayCalculator();
setInterval(dDayCalculator, 1000);