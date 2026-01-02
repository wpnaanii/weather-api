const express = require("express");
const router = express.Router();
const weatherService = require("../services/weatherService");

router.get("/sun", async (req, res, next) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const data = await weatherService.getWeatherByCity(city);

    res.json({
      city: data.name,
      country: data.sys.country,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
