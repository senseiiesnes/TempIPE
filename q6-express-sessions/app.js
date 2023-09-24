const express = require('express');
const session = require('express-session');
const app = express();

// Middleware for parsing POST requests
app.use(express.urlencoded({ extended: true }));

// Session middleware setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Main Page
app.get('/', (req, res) => {
  const html = `
    <html>
    <body>
      <h1>Welcome to the Main Page</h1>
      <form action="/savesession" method="post">
        Username: <input type="text" name="username" required>
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  `;
  res.send(html);
});

// Savesession Page
app.post('/savesession', (req, res) => {
  const { username } = req.body;
  req.session.username = username;
  const html = `
    <html>
    <body>
      <h1>Welcome to the Save Session Page</h1>
      <p>Session username: ${username}</p>
      <a href="/fetchsession">Fetch Session</a>
    </body>
    </html>
  `;
  res.send(html);
});

// Fetchsession Page
app.get('/fetchsession', (req, res) => {
  const username = req.session.username || 'Guest';
  const html = `
    <html>
    <body>
      <h1>Welcome to the Fetch Session Page</h1>
      <p>Session username: ${username}</p>
      <a href="/deletesession">Logout</a>
    </body>
    </html>
  `;
  console.log(req.session);
  res.send(html);
});

// Deletesession Page
app.get('/deletesession', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    const html = `
      <html>
      <body>
        <h1>Session has been deleted.</h1>
        <a href="/">Back to Main Page</a>
      </body>
      </html>
    `;
    res.send(html);
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
