const lobby = document.querySelector(".lobby");
const main = document.querySelector(".main");

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const helloMessage = document.getElementById("hello-message");
const logoutBtn = document.getElementById("logout-button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintLobbyPage() {
    lobby.classList.remove(HIDDEN_CLASSNAME);
    main.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
}

function handleLogoutBtnClick(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    paintLobbyPage();
}

function paintMainPage() {
    const username = localStorage.getItem(USERNAME_KEY);
    helloMessage.innerText = `Hello ${username}`;
    lobby.classList.add(HIDDEN_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.addEventListener("click", handleLogoutBtnClick);
}

function handleLoginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginInput.value = "";
    paintMainPage();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    paintLobbyPage();
} else {
    paintMainPage();
}