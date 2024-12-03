const express = require("express");
const fetch = require("node-fetch"); // Use fetch to call the Python API
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.post("/process-image", async (req, res) => {
  try {
    const { image } = req.body;

    // Send image data to Python Flask server
    const response = await fetch("http://localhost:5001/process-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Error processing image" });
  }
});

app.listen(PORT, () => {
  console.log(`Node server is running on port ${PORT}`);
});
