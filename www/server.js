require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all HTML, CSS, JS and other files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "MINDCARE AI Server is running"
  });
});

app.listen(PORT, HOST, () => {
  console.log(`MINDCARE AI Server running on port ${PORT}`);
});