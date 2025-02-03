const apiKey = 'your_api_key_here';  // Replace with your actual API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const currentWeatherElem = document.getElementById('currentWeather');
const forecastElem = document.getElementById('forecast');

searchBtn.addEventListener('click', () => {
const city = cityInput.value.trim();
if (city) {
    fetchWeatherData(city);
}
});

// Function to fetch weather data from the API
async function fetchWeatherData(city) {
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

try {
    const currentWeatherResponse = await fetch(currentWeatherUrl);
    const currentWeatherData = await currentWeatherResponse.json();

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    displayCurrentWeather(currentWeatherData);
    displayForecast(forecastData);
} catch (error) {
    console.error('Error fetching weather data:', error);
}
}

// Function to display current weather data
function displayCurrentWeather(data) {
if (data.cod === 200) {
    currentWeatherElem.innerHTML = `
    <h2>Current Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    `;
} else {
    currentWeatherElem.innerHTML = `<p>City not found. Please try again.</p>`;
}
}

// Function to display forecast data (for the next 5 days)
function displayForecast(data) {
  const days = data.list.filter((item, index) => index % 8 === 0);  // Get data for 12:00 PM of each day
forecastElem.innerHTML = '';

days.forEach((day) => {
    const dayElem = document.createElement('div');
    dayElem.classList.add('forecast-day');
    dayElem.innerHTML = `
    <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
    <p>${day.main.temp}°C</p>
    <p>${day.weather[0].description}</p>
    `;
    forecastElem.appendChild(dayElem);
});
}
