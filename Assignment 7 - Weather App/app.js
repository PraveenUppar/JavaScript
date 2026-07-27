// Assignment 7: Weather App
// =========================
//
// Build a weather app using fetch.
//
// Requirements:
// 1. Create an input for city name
// 2. Create a Search button
// 3. Fetch weather data from a weather API
// 4. Show city, temperature, weather condition, and humidity
// 5. Show loading text while request is running
// 6. Show error message for invalid city or failed request
// 7. Clear old results before showing new ones
//
// Hints:
// - You can use Open-Meteo or any free weather API
// - Keep API logic in a separate function
// - Use try/catch with async/await
//
// Bonus:
// - Add recent searches
// - Save last searched city in localStorage
// - Show different background based on weather

// DOM Element UI Hooks
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const loadingText = document.getElementById("loading");
const errorBox = document.getElementById("error-message");
const resultCard = document.getElementById("weather-result");
const historyList = document.getElementById("history-list");
const recentBox = document.getElementById("recent-searches");

// Weather Card Values Hooks
const resCity = document.getElementById("res-city");
const resTemp = document.getElementById("res-temp");
const resCondition = document.getElementById("res-condition");
const resHumidity = document.getElementById("res-humidity");

let searchHistory = [];

// Requirement 7: Structural UI Reset State
function clearUI() {
  errorBox.classList.add("hidden");
  resultCard.classList.add("hidden");
  loadingText.classList.add("hidden");
  document.body.className = "bg-default";
}

// Requirement 3: Dedicated Core Weather Fetch Handler
async function fetchWeatherData(cityName) {
  // Step A: Convert human-readable city string to map coordinates via open geocoding API
  const geoUrl = `https://open-meteo.com{encodeURIComponent(cityName)}&count=1&language=en&format=json`;
  const geoResponse = await fetch(geoUrl);

  if (!geoResponse.ok) throw new Error("Geocoding service unreachable.");

  const geoData = await geoResponse.json();
  if (!geoData.results || geoData.results.length === 0) {
    throw new Error(`City "${cityName}" not found.`);
  }

  const { latitude, longitude, name, country } = geoData.results[0];
  const exactLocationName = `${name}, ${country}`;

  // Step B: Use coordinate outputs to fetch absolute real-time weather metrics
  const weatherUrl = `https://open-meteo.com{latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`;
  const weatherResponse = await fetch(weatherUrl);

  if (!weatherResponse.ok) throw new Error("Weather forecast engine failure.");

  const weatherData = await weatherResponse.json();

  return {
    location: exactLocationName,
    temp: Math.round(weatherData.current.temperature_2m),
    humidity: weatherData.current.relative_humidity_2m,
    code: weatherData.current.weather_code,
  };
}

// Mapping numeric WMO codes from Open-Meteo down to explicit text and styles
function interpretWeatherCode(code) {
  if (code === 0) return { text: "Clear Sky", class: "bg-sunny" };
  if (code >= 1 && code <= 3)
    return { text: "Partly Cloudy", class: "bg-cloudy" };
  if (code >= 45 && code <= 48) return { text: "Foggy", class: "bg-cloudy" };
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82))
    return { text: "Rainy", class: "bg-rainy" };
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86))
    return { text: "Snowy", class: "bg-snowy" };
  if (code >= 95) return { text: "Thunderstorm", class: "bg-rainy" };
  return { text: "Unknown Conditions", class: "bg-default" };
}

// Primary Application Processing Pipeline
async function handleSearch(targetCity) {
  const city = targetCity || cityInput.value.trim();
  if (!city) return;

  // Requirement 7: Flush display layout down to initial state parameters
  clearUI();

  // Requirement 5: Show background loader message
  loadingText.classList.remove("hidden");

  try {
    const data = await fetchWeatherData(city);
    const parsedConditions = interpretWeatherCode(data.code);

    // Requirement 4: Bind execution structures out to visible content parameters
    resCity.innerText = data.location;
    resTemp.innerText = `${data.temp}°C`;
    resCondition.innerText = parsedConditions.text;
    resHumidity.innerText = `${data.humidity}%`;

    // Bonus: Shift active styling class depending on context
    document.body.className = parsedConditions.class;

    // Requirement 5 & 4: Toggle loading overlay down, bring card container live
    loadingText.classList.add("hidden");
    resultCard.classList.remove("hidden");

    // Update operational tracking stacks
    updateHistory(city);
    cityInput.value = "";
  } catch (error) {
    // Requirement 6: Render error states safely down to screen
    loadingText.classList.add("hidden");
    errorBox.innerText = error.message;
    errorBox.classList.remove("hidden");
  }
}

// Bonus: LocalStorage tracking mechanisms
function updateHistory(city) {
  const cleanCity = city.toLowerCase();

  // Strip duplicate entry matches across history lists
  searchHistory = searchHistory.filter(
    (item) => item.toLowerCase() !== cleanCity,
  );
  searchHistory.unshift(city); // Prepend to history stack

  if (searchHistory.length > 5) searchHistory.pop(); // Cap history pool at 5 items

  localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
  localStorage.setItem("lastWeatherCity", city);
  renderHistoryUI();
}

function renderHistoryUI() {
  if (searchHistory.length === 0) {
    recentBox.classList.add("hidden");
    return;
  }

  recentBox.classList.remove("hidden");
  historyList.innerHTML = ""; // Wipe list structure cleanly

  searchHistory.forEach((city) => {
    const tag = document.createElement("span");
    tag.className = "history-tag";
    tag.innerText = city;
    tag.addEventListener("click", () => handleSearch(city));
    historyList.appendChild(tag);
  });
}

// Wire Global Trigger Events
searchBtn.addEventListener("click", () => handleSearch());
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});

// App Startup/Initialization Hook
window.addEventListener("DOMContentLoaded", () => {
  const savedHistory = localStorage.getItem("weatherHistory");
  const lastCity = localStorage.getItem("lastWeatherCity");

  if (savedHistory) {
    searchHistory = JSON.parse(savedHistory);
    renderHistoryUI();
  }

  // Bonus: If a previous search target is matched, boot app directly into that active look state
  if (lastCity) {
    handleSearch(lastCity);
  }
});
