function getWeather(cities, info = "all") {
  let cityArr = Array.isArray(cities) ? cities : [cities];
  let promises = cityArr.map((city) => {
    let url =
      `http://localhost:3000/weather?city=${city}` +
      (info !== "all" ? `&info=${info}` : "");

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(`\nCITY: ${data.city}`);
        if (data.weather.wind) {
          console.log(
            `WIND: ${data.weather.wind.speed} m/s, ${data.weather.wind.deg} deg`,
          );
          if (data.weather.wind.speed > 15)
            console.log("WARNING! Wind speed over 15 m/s");
        }
        if (data.weather.clouds !== undefined)
          console.log(`CLOUDS: ${data.weather.clouds}%`);
        if (data.weather.temp !== undefined) {
          console.log(`TEMP: ${data.weather.temp} C`);
          if (data.weather.temp < -20)
            console.log("WARNING! Temperature below -20 degrees");
        }
        if (data.weather.precipitation !== undefined)
          console.log(`PRECIPITATION: ${data.weather.precipitation}%`);
      })
      .catch((e) =>
        console.log(`Error fetching weather for ${city}: ${e.message}`),
      );
  });

  return Promise.all(promises);
}

// Test logic
let weather1 = getWeather("Berlin", "wind");
let weather2 = getWeather(["Oslo", "Yakutsk"], "all");
