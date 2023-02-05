const API_KEY = "867ce9333e85b152bb382661f9bdafa6";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const weather = document.getElementById("weather");
        const icon = weather.querySelector(".icon");
        const status = weather.querySelector(".status");
        const city = weather.querySelector(".city");
        const temperature = weather.querySelector(".temperature");

        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        status.innerText = `${data.weather[0].main}`;
        city.innerText = data.name;
        temperature.innerText = `${data.main.temp}°C`;
    });
}

function onGeoError() {
    alert("Please allow access to location information.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);