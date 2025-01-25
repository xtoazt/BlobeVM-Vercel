const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Homepage route
app.get("/", (req, res) => {
  res.send("BlobeVM is ready to deploy!");
});

// Serve the install.sh file
app.get("/install.sh", (req, res) => {
  res.sendFile(path.join(__dirname, "install.sh"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
