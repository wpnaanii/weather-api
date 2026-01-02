Weather App

Weather App is a web application developed as part of the Web Technologies course. The purpose of this project is to demonstrate practical skills in working with REST APIs, external web services, and frontend–backend interaction.

The application allows users to obtain current weather information for a selected city. After entering a city name, the system displays real-time weather data, including temperature, weather description, “feels like” temperature, humidity, atmospheric pressure, wind speed, and precipitation data. Additionally, the application shows sunrise and sunset times and displays the city location on an interactive map.

The backend of the application is implemented using Node.js and Express.js. It follows a layered architecture and includes separate modules for routes, controllers, services, and middlewares. Weather data is retrieved from the OpenWeatherMap API. The server processes the received data and returns a structured JSON response to the client. Error handling mechanisms are implemented to manage invalid requests and API-related issues.

The frontend part of the application is developed using HTML, CSS, and JavaScript. Data exchange between the frontend and backend is performed using the Fetch API. The user interface is dynamically updated without page reloads. A consistent color theme and responsive layout are used to ensure usability and readability. Weather conditions are additionally represented using graphical icons and emojis.

The application supports searching for cities from different countries and works correctly with international city names. Input validation and user feedback messages are implemented to improve reliability and user experience.

To run the project locally, it is required to install all dependencies using npm, configure the OpenWeather API key in a `.env` file, and start the server. The application is accessible via a local web browser.

This project satisfies the requirements of the assignment and demonstrates the use of external APIs, RESTful architecture, client-server communication, and basic UI/UX principles.

Technologies used: Node.js, Express.js, OpenWeatherMap API, HTML, CSS, JavaScript, Leaflet.js, OpenStreetMap.

Project status: completed.

Author: Karakat  
Course: Web Technologies 
