
const myKey = "f76f8ec10f9df36c1b5b5fafbb8dadb7";
const myLat = -18.909409872026046;
const myLong = 47.47739236633607;

const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#weather-icon");

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

async function apiFetch() {
    try {
        const response = await fetch(myUrl);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    myTown.textContent = data.name;
    myDescription.textContent = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp} °C`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    myGraphic.setAttribute("src", iconSrc);
    myGraphic.setAttribute("alt", data.weather[0].description);
}

// Lancer le programme
apiFetch();