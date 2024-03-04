//Search City - Inner HTML

// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#enter-city");

//   let cityName = document.querySelector("#city-name");
//   cityName.innerHTML = searchInput.value;
// }

// let city = document.querySelector("#search");
// city.addEventListener("submit", search);

// Add date and time - inner HTML

let day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novermber",
  "December",
];

//Tue Feb 06 2024 09:24:30
// let now = new Date();
// console.log(now);

let current = new Date();
let currentDate = document.querySelector("#date");
let days = day[current.getDay()];
let months = month[current.getMonth()];
let dates = current.getDate();
let years = current.getFullYear();
let hours = current.getHours();
let mins = current.getMinutes();
let seconds = Math.round(current.getSeconds());

currentDate.innerHTML = `${days} ${dates} ${months} - ${hours}:${mins}:${seconds}`;

// Response from API - Temperature and display City
function currentTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let actualTemp = document.querySelector(".temp");
  actualTemp.innerHTML = `${temp}℃`;
}

// Response from Api - City and display City
function searchCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#enter-city");
  let city = searchCity.value;
  let showCity = document.querySelector("#city");
  showCity.innerHTML = searchCity.value;
  let apiKey = "c99e3c63db4b771cf4a3162ff97bc69c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}

let form = document.querySelector("#search");
form.addEventListener("submit", searchCity);
