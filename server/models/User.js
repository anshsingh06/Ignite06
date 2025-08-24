const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["restaurant", "ngo", "school", "family"] },
    location: {
        lat: Number,
        lng: Number,
        address: String
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
