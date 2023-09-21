const apiKey = "37d055aa143298bd9608f9fa475f8194";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&q=";
// let input = document.querySelector("#cityInput");
let searchButton = document.querySelector("#searchIcon");
let searchInput = document.querySelector("#cityInput");
let weatherImage = document.querySelector("#WeatherImage");

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".errorMessage").classList.remove("isActive");
    document.querySelector("#lowerweaterSection").classList.add("isActive");
  } else {
    document.querySelector(".errorMessage").classList.add("isActive");
    let weatherData = data.weather[0].main;
    console.log("Eles Statment");
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML =
      Math.round(data.main.temp) + 1 + "°C";
    document.querySelector("#humadity").innerHTML = data.main.humidity + "%";
    document.querySelector("#windSpeed").innerHTML = data.wind.speed + " km/h";

    weatherData == "Clear"
      ? weatherImage.setAttribute("src", "images/clear.png")
      : weatherData == "Rain"
      ? weatherImage.setAttribute("src", "images/rain.png")
      : weatherData == "Clouds"
      ? weatherImage.setAttribute("src", "images/clouds.png")
      : weatherData == "Drizzle"
      ? weatherImage.setAttribute("src", "images/drizzle.png")
      : weatherData == "Mist"
      ? weatherImage.setAttribute("src", "images/mist.png")
      : weatherImage.setAttribute("src", "images/clear.png");

    document.querySelector("#lowerweaterSection").classList.remove("isActive");
  }
}

searchButton.addEventListener("click", () => {
  getWeather(searchInput.value);
});
