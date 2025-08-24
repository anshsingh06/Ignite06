const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    foodType: String,
    quantity: Number,
    pickupTime: Date,
    status: { type: String, enum: ["available", "reserved", "collected"], default: "available" },
    location: {
        lat: Number,
        lng: Number,
        address: String
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Food", foodSchema);
