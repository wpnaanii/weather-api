const axios = require("axios");

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherByCity(city) {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric"
    }
  });

  const data = response.data;

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind_speed: data.wind.speed,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    coordinates: {
      lat: data.coord.lat,
      lon: data.coord.lon
    },
    rain_3h: data.rain?.["3h"] || 0,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,

  };
}

module.exports = {
  getWeatherByCity
};