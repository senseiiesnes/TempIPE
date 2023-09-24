const express = require("express");
const app = express();
const port = 3000;

// Sample weather data (for demonstration)
const weatherData = {
  NewYork: { location: "New York", temperature: "72°F", description: "Sunny" },
  LosAngeles: {
    location: "Los Angeles",
    temperature: "68°F",
    description: "Partly Cloudy",
  },
  Chicago: { location: "Chicago", temperature: "62°F", description: "Rainy" },
};

// Route for the homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Weather Forecast Service</h1>");
});

// Route to handle weather queries
app.get("/weather", (req, res) => {
  const location = req.query.location;
  if (!location || !weatherData[location]) {
    res
      .status(400)
      .send("<h1>Location not found or missing query parameter.</h1>");
  } else {
    const weatherInfo = weatherData[location];
    res.send(`<h1>  Location: ${weatherInfo.location}       <br/> 
                    Temperature: ${weatherInfo.temperature} <br/>
                    Description: ${weatherInfo.description} </h1>`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
