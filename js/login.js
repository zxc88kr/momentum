const lobby = document.querySelector(".lobby");
const main = document.querySelector(".main");

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const helloMessage = document.getElementById("hello-message");
const logoutBtn = document.getElementById("logout-button");

const LOGIN_HIDDEN_CL = "hidden";
const LOGIN_USERNAME_KEY = "username";

function paintLobbyPage() {
    lobby.classList.remove(LOGIN_HIDDEN_CL);
    main.classList.add(LOGIN_HIDDEN_CL);
    loginForm.addEventListener("submit", handleLoginSubmit);
}

function handleLogoutBtnClick(event) {
    event.preventDefault();
    localStorage.removeItem(LOGIN_USERNAME_KEY);
    paintLobbyPage();
}

function paintMainPage() {
    const username = localStorage.getItem(LOGIN_USERNAME_KEY);
    helloMessage.innerText = `Hello ${username}`;
    lobby.classList.add(LOGIN_HIDDEN_CL);
    main.classList.remove(LOGIN_HIDDEN_CL);
    logoutBtn.addEventListener("click", handleLogoutBtnClick);
}

function handleLoginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(LOGIN_USERNAME_KEY, loginInput.value);
    loginInput.value = "";
    paintMainPage();
}

const savedUsername = localStorage.getItem(LOGIN_USERNAME_KEY);

if (savedUsername === null) {
    paintLobbyPage();
} else {
    paintMainPage();
}