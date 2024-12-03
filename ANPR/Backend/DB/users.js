const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Enforce uniqueness
    password: { type: String, required: true }, // Add required constraint
    Cpassword: { type: String, required: true }, // Optional: if you want to store it
});

// Create a model from the schema
module.exports = mongoose.model("User", usersSchema); // Use "User" instead of "users"
