class WeatherDashboard {
  #cities;
  #weatherData;

  constructor() {
    this.#cities = new Set();
    this.#weatherData = new Map();
  }

  addCity(city) {
    // Code here!
    this.#cities.add(city); // Set automatically ignores duplicates
  }

  async syncData(fetchFunction) {
    // Code here!
    // Map the Set of cities into an array of Promises
    const fetchPromises = Array.from(this.#cities).map((city) =>
      fetchFunction(city)
        .then((result) => {
          // Store resolved data in Map
          this.#weatherData.set(result.city, result.weather);
        })
        .catch((error) => {
          // Handle rejection without breaking loop
          console.error(`Failed to sync data for ${city}: ${error.message}`);
        }),
    );

    // Resolve all requests concurrently
    await Promise.all(fetchPromises);
  }

  getHottestCity() {
    // Code here!
    if (this.#weatherData.size === 0) return null;

    let hottestCity = null;
    let maxTemp = -Infinity;

    // Iterate through the Map to find the highest temperature
    for (let [city, weather] of this.#weatherData) {
      if (weather.temp > maxTemp) {
        maxTemp = weather.temp;
        hottestCity = city;
      }
    }

    return hottestCity;
  }
}

// Do not modify! Test code (Syntax fixed for execution)
// Mock fetch function simulating an API call
const mockWeatherFetch = async (city) => {
  const delay = Math.floor(Math.random() * 500) + 100;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (city === "Atlantis") reject(new Error("City not found"));
      const mockData = {
        Oslo: { temp: -5, wind: 12 },
        Manila: { temp: 32, wind: 5 },
        Tokyo: { temp: 15, wind: 8 },
      };
      resolve({ city: city, weather: mockData[city] || { temp: 20, wind: 2 } });
    }, delay);
  }); //67
};

const dashboard = new WeatherDashboard();
dashboard.addCity("Oslo");
dashboard.addCity("Manila");
dashboard.addCity("Tokyo");
dashboard.addCity("Oslo"); // Duplicate, Set will ignore
dashboard.addCity("Atlantis"); // Will trigger a rejected promise

(async () => {
  console.log("Synchronizing data...");
  await dashboard.syncData(mockWeatherFetch);
  console.log("Hottest city is:", dashboard.getHottestCity());
})();
