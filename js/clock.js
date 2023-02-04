const clock = document.getElementById("clock");
const todayInfo = document.getElementById("today-info");

function getDate() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    
    const years = String(now.getFullYear()).padStart(2, "0");
    const months = String(now.getMonth() + 1).padStart(2, "0");
    const days = String(now.getDate()).padStart(2, "0");

    const week = now.getDay();
    const weeks = ["일", "월", "화", "수", "목", "금", "토"];

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    todayInfo.innerText = `${years}년 ${months}월 ${days}일 ${weeks[week]}요일`;
}

getDate();
setInterval(getDate, 1000);