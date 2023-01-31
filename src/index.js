const inputForm = document.querySelector(".input");
const range = document.getElementById("range");
const choice = document.getElementById("choice");

const result = document.querySelector(".result");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const victory = document.getElementById("victory");

result.hidden = true;

function handleInputChange() {
    choice.max = parseInt(range.value, 10);
}

function handleInputSubmit(event) {
    event.preventDefault();
    const userNumber = parseInt(choice.value, 10);
    const computerNumber = Math.floor(Math.random() * (parseInt(range.value, 10) + 1));
    user.innerText = userNumber;
    computer.innerText = computerNumber;
    if (userNumber === computerNumber) {
        victory.innerText = "You won!";
        victory.style.color = "blue";
    } else {
        victory.innerText = "You lost!";
        victory.style.color = "red";
    }
    result.hidden = false;
}

inputForm.addEventListener("change", handleInputChange);
inputForm.addEventListener("submit", handleInputSubmit);