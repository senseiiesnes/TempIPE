const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, // 1MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /text\/plain/; // Only allow plain text files

    const isAllowed = allowedFileTypes.test(file.mimetype);
    if (isAllowed) {
      cb(null, true);
    } else {
      cb(new Error("Only plain text files (txt) are allowed."));
    }
  },
});

// Serve HTML form to upload files
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle file upload
app.post("/upload", upload.single("textFile"), (req, res, next) => {
  if (!req.file) {
    return res.status(400).send("Please select a valid text file (up to 1MB).");
  }

  res.status(200).send("File uploaded successfully.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
