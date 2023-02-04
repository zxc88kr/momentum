const images = [ "0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png" ];

const container = document.querySelector(".container");

const chosenImage = images[Math.floor(Math.random() * images.length)];

container.style.backgroundImage = `url(../img/${chosenImage})`;