import "./style.css";
import { getWeatherData, processWeatherData } from "./weather.js";

const form = document.getElementById("location-form");
const weatherDataDiv = document.getElementById("weather-data");
const loadingDiv = document.getElementById("loading");
const unitToggle = document.getElementById("unit-toggle");

let currentUnit = "metric"; // Default to Celsius

// Event listener for form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearWeatherDivs();
  const location = document.getElementById("location-input").value;

  loadingDiv.style.display = "block"; // Show loading spinner

  try {
    const weatherData = await getWeatherData(location, currentUnit);
    const processedData = processWeatherData(weatherData);
    displayWeather(processedData);
    displayForecast(weatherData.days);
  } catch (error) {
    weatherDataDiv.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
  } finally {
    loadingDiv.style.display = "none"; // Hide loading spinner
  }
});

// Toggle between Celsius and Fahrenheit
unitToggle.addEventListener("change", () => {
  currentUnit = unitToggle.checked ? "metric" : "imperial";
});

// Display the weather information
function displayWeather(data) {
  weatherDataDiv.innerHTML = `
        <h2>Weather in ${data.location}</h2>
        <p>${data.description}</p>
        <p>Temperature: ${data.temp}°${currentUnit === "metric" ? "C" : "F"}</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.windSpeed}${
    currentUnit === "metric" ? " m/s" : " mph"
  }</p>
    `;

  // Change background based on weather condition
  document.body.style.backgroundColor = getBackgroundColor(data.description);
}

// Function to display forecast for the next days
function displayForecast(days) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "<h3>Next Days Forecast:</h3>";

  days.forEach((day, index) => {
    if (index < 5) {
      // Limit to the next 5 days
      const forecastItem = document.createElement("div");
      forecastItem.className = "forecast-item";
      forecastItem.innerHTML = `
               <p><strong>${day.datetime}</strong></p>
               <p>Max Temp: ${day.tempmax}°C</p>
               <p>Min Temp: ${day.tempmin}°C</p>
               <p>Conditions: ${day.conditions}</p>
           `;
      forecastItem.style.backgroundColor = getBackgroundColor(day.description);
      forecastDiv.appendChild(forecastItem);
    }
  });
}

// Function to get background color based on weather condition
function getBackgroundColor(description) {
  if (description.includes("clear")) return "#FFD700"; // Sunny
  if (description.includes("cloud")) return "#B0C4DE"; // Cloudy
  if (description.includes("rain")) return "#87CEFA"; // Rainy
  return "#F0E68C"; // Default weather color
}

function clearWeatherDivs() {
  document.getElementById("weather-data").innerHTML = "";
  document.getElementById("forecast").innerHTML = "";
}
