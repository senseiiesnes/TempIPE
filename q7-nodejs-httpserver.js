const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Check if the request is for the root path
  if (req.url === "/") {
    // Read the contents of the HTML file
    const htmlFilePath = path.join(__dirname, "simple.html");
    fs.readFile(htmlFilePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading HTML file:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        // Set the response headers and send the HTML content
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    // Handle other routes if needed
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
