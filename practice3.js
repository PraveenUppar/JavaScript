// - Fetch weather data from OpenWeatherMap API (free)
// - Search by city name
// - Show loading spinner during API calls
// - Handle all error cases (network, invalid city, etc.)
// - Display current weather + 5-day forecast
// - Save recent searches to localStorage

class WeatherApp {
  constructor() {
    this.apiKey = "YOUR_KEY_HERE";
    this.searchHistory = [];
    this.showLoading = false;
    this.init();
  }

  async fetchWeather(city) {
    this.showLoading(true);
    try {
      const response = await fetch("url");
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      this.searchHistory.push(city);
    } catch (error) {
      alert(error.message);
    } finally {
      this.showLoading(false);
    }
    this.saveToStorage();
  }
}
