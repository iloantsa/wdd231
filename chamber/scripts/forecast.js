const forecastKey = "f76f8ec10f9df36c1b5b5fafbb8dadb7";
const forecastLat = -18.909409872026046;
const forecastLong = 47.47739236633607;


const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${forecastLat}&lon=${forecastLong}&units=metric&appid=${forecastKey}`;

async function getForecast() {

    const response = await fetch(forecastUrl);

    const data = await response.json();

    displayForecast(data.list);

}

getForecast();
function displayForecast(list) {

    const container = document.querySelector("#forecast-container");

    container.innerHTML = "";

    const days = list.filter(item => item.dt_txt.includes("12:00:00"));

    days.slice(0, 3).forEach(day => {

        const card = document.createElement("div");

        card.classList.add("forecast-card");

        const date = new Date(day.dt_txt);

        const weekday = date.toLocaleDateString("en-US",
            { weekday: "long" });

        card.innerHTML = `

            <h4>${weekday}</h4>

            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
                 alt="${day.weather[0].description}">

            <p>${Math.round(day.main.temp)}°C</p>

            <p>${day.weather[0].description}</p>

        `;

        container.appendChild(card);

    });

}    