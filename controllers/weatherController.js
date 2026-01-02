const { getWeatherByCity } = require("../services/weatherService");

async function getWeather(req, res, next) {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City parameter is required" });
    }

    const weather = await getWeatherByCity(city);
    res.json(weather);
  } catch (error) {
    next(error);
  }
}

module.exports = { getWeather };
