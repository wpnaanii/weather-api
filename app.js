const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

const weatherRoutes = require("./routes/weatherRoutes");
const extraRoutes = require("./routes/extraRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", weatherRoutes);
app.use("/api/extra", extraRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
