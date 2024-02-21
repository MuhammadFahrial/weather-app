// https://api.openweathermap.org/data/2.5/weather?units=metric&q=indonesia&appid=fa7d85558294a948716203547ae4788b

const searchBtn = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const weather = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humadity = document.querySelector(".humadity");
const wind = document.querySelector(".wind");
const error = document.querySelector(".error");

const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(location) {
  const res = await fetch(apiUrl + location + `&appid=${apiKey}`);
  const data = await res.json();

  // console.log(data);

  try {
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    city.innerHTML = data.name;
    humadity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " " + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/raining.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/drizzling.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "assets/snow.png";
    }
    error.style.display = "none";
    weather.style.display = "block";
  } catch (err) {
    error.innerHTML = data.message;
    error.style.display = "block";
    weather.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
