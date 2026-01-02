document.addEventListener("DOMContentLoaded", () => {
  console.log("SCRIPT LOADED");

  const button = document.getElementById("getWeatherBtn");
  const cityInput = document.getElementById("cityInput");
  const resultDiv = document.getElementById("weatherResult");

  let map = null;
  let marker = null;

  button.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) {
      alert("Enter city name");
      return;
    }

    resultDiv.innerHTML = "⏳ Loading weather...";

    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();

      if (data.error) {
        resultDiv.innerHTML = `❌ ${data.error}`;
        return;
      }

      // 🌈 WEATHER EMOJI
      const emoji = getWeatherEmoji(data.description);

      // 🌅 SUN INFO (из backend)
      const sunrise = new Date(data.sunrise * 1000).toLocaleTimeString();
      const sunset = new Date(data.sunset * 1000).toLocaleTimeString();

      // ✅ ОДИН вывод (ВАЖНО!)
      resultDiv.innerHTML = `
        <h2>${data.city}, ${data.country}</h2>

        <div class="weather-emoji">${emoji}</div>

        <p class="temp">${data.temperature} °C</p>
        <p class="desc">${data.description}</p>

        <p>Feels like: ${data.feels_like} °C</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Pressure: ${data.pressure} hPa</p>
        <p>Wind: ${data.wind_speed} m/s</p>
        <p>Rain (3h): ${data.rain_3h} mm</p>

        <hr>

        <h3>🌅 Sun info</h3>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p>
      `;

      // 🗺 MAP
      const { lat, lon } = data.coordinates;

      if (!map) {
        map = L.map("map").setView([lat, lon], 10);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap"
        }).addTo(map);
      }

      if (marker) marker.remove();
      marker = L.marker([lat, lon]).addTo(map);
      map.setView([lat, lon], 10);

    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = "⚠️ Error loading weather";
    }
  });
});

// 🌤 WEATHER EMOJI FUNCTION (ДОЛЖНА БЫТЬ ВНЕ click)
function getWeatherEmoji(description = "") {
  description = description.toLowerCase();

  if (description.includes("clear")) return "☀️";
  if (description.includes("cloud")) return "☁️";
  if (description.includes("rain")) return "🌧️";
  if (description.includes("snow")) return "❄️";
  if (description.includes("mist") || description.includes("fog")) return "🌫️";

  return "🌤️";
}