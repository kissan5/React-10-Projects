const mongoose = require('mongoose');

const adminsSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true }, // Assuming phone is required
    email: { type: String, required: true, unique: true }, // Enforce uniqueness
    password: { type: String, required: true }, // Add required constraint
    Cpassword: { type: String, required: true }, // Optional: if you want to store it
});

// Create a model from the schema
module.exports = mongoose.model("Admin", adminsSchema); // Use "Admin" instead of "admins"
