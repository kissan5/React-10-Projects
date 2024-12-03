const Tesseract = require('tesseract.js');

const handleImageUpload = (req, res) => {
  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  // Process the image with Tesseract.js
  Tesseract.recognize(
    Buffer.from(image, 'base64'), // Decode the base64 image
    'eng',
    {
      logger: (m) => console.log(m), // Log progress
    }
  )
    .then(({ data: { text } }) => {
      const currentTime = new Date().toLocaleString();
      res.json({ detected_text: text.trim(), capture_time: currentTime });
    })
    .catch((error) => {
      console.error('Error processing image:', error);
      res.status(500).json({ error: 'Failed to process image' });
    });
};

module.exports = handleImageUpload;
