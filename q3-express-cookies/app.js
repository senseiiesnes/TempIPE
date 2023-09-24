const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route to display the signup form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

// Route to handle form submission
app.post("/signup", (req, res) => {
  const { name, contactNumber, email, address, gender, dob } = req.body;

  // Store user information in a cookie named "registered" (expires in 15 seconds)
  res.cookie(
    "registered",
    JSON.stringify({ name, contactNumber, email, address, gender, dob }),
    {
      maxAge:15000, // 15 seconds
    }
  );

  // Display a confirmation message
  res.send('Registration successful! <a href="/details">View Details</a>');
});

// Route to display user details from the "registered" cookie
app.get("/details", (req, res) => {
  const registeredData = req.cookies.registered;
  if (!registeredData) {
    return res.send('No user data found. <a href="/">Go Home</a>');
  }

  const userData = JSON.parse(registeredData);

  // Display user details and a link to logout
  res.send(`
      <h1>User Details</h1>
      <p>Name: ${userData.name}</p>
      <p>Contact Number: ${userData.contactNumber}</p>
      <p>Email: ${userData.email}</p>
      <p>Address: ${userData.address}</p>
      <p>Gender: ${userData.gender}</p>
      <p>DOB: ${userData.dob}</p>
      <a href="/logout">Logout</a>
    `);
});

// Route to logout and remove the "registered" cookie
app.get("/logout", (req, res) => {
  res.clearCookie("registered");
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
