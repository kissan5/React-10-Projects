const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const handleImageUpload = require('./handleImageUpload');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

// Route for processing image uploads
app.post('/process-image', handleImageUpload);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
