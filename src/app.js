let now = new Date();
let currentDay = document.querySelector("#current-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentDay.innerHTML = `${day} ${hours}:${minutes}`;

function showWeather(response) {
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML = Math.round(
    response.data.main.temp
  );
}

function showLocation(event) {
  event.preventDefault();
  let apiKey = "3ed235ed9a16f901f3484e3e2f26d72f";
  let city = document.querySelector("#userLocation-input").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}
let userLocation = document.querySelector("#user-location");
userLocation.addEventListener("submit", showLocation);
