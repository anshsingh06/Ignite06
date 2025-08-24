const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
    studentName: String,
    age: Number,
    parentContact: String,
    location: {
        lat: Number,
        lng: Number,
        address: String
    },
    status: { type: String, enum: ["pending", "approved"], default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
