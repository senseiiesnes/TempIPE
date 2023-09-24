const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Set up Pug as the view engine
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to render the student form
app.get("/", (req, res) => {
  res.render("student-form");
});

// Define a route to handle form submission
app.post("/data", (req, res) => {
  const { rollNo, name, division, email, subject } = req.body;
  res.render("display-data", { rollNo, name, division, email, subject });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
