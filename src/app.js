// <⚠️ DONT DELETE THIS ⚠️>
import "./style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");

const superEventHandler = {
    'mouseEnter': () => {
        h2.innerText = "The mouse is here!"
        console.log(h2);
    },

    'mouseLeave': () => {
        h2.innerText = "The mouse is gone!"
    },

    'contextMenu': () => {
        h2.innerText = "That was a right click!"
    },

    'resize': () => {
        h2.innerText = "You just resized!"
    }
};

h2.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
h2.addEventListener("contextmenu", superEventHandler.contextMenu);
window.addEventListener("resize", superEventHandler.resize);