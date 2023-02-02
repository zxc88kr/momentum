const colors = [
    "#ef5777", "#575fcf", "#4bcffa", "#34e7e4", "#0be881", "#f53b57",
    "#3c40c6", "#0fbcf9", "#00d8d6", "#05c46b", "#ffc048", "#ffdd59",
    "#ff5e57", "#d2dae2", "#485460", "#ffa801", "#ffd32a", "#ff3f34"
];

const button = document.querySelector("button");

function handleButtonClick(event) {
    event.preventDefault();
    let colorIndex1;
    let colorIndex2;
    while (true)
    {
        colorIndex1 = Math.floor(Math.random() * colors.length);
        colorIndex2 = Math.floor(Math.random() * colors.length);
        if (colorIndex1 !== colorIndex2) break;
    }
    document.body.style.background = `linear-gradient(to left, ${colors[colorIndex1]}, ${colors[colorIndex2]})`;
}

button.addEventListener("click", handleButtonClick);