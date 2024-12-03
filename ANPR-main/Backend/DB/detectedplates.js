const mongoose = require('mongoose');

const detectedPlateSchema = new mongoose.Schema({
  plate: { type: String, required: true },
  time: { type: String, required: true },
  image: { type: String, required: true }
});

const detectedplates = mongoose.model('DetectedPlate', detectedPlateSchema);

module.exports = detectedplates;
