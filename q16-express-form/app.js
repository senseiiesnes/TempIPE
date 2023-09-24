const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/process-form">
      <input type="text" name="username" placeholder="Username" required><br><br>
      <input type="password" name="password" placeholder="Password" required><br><br>
      <input type="password" name="confirmPassword" placeholder="Confirm Password" required><br><br>
      <input type="radio" name="gender" value="male"> Male
      <input type="radio" name="gender" value="female"> Female<br><br>
      <input type="submit" name="submit" value="Submit">
      <input type="reset" name="reset" value="Reset">
    </form>
  `);
});

app.post("/process-form", (req, res) => {
  const { username, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword) {
    res.send(
      '<p>Password and Confirm Password do not match.</p><a href="/">Go back</a>'
    );
  } else {
    res.send(`
      <p>Username: ${username}</p>
      <p>Password: ${password}</p>
      <p>Gender: ${gender}</p>
      <a href="/">Go back</a>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
