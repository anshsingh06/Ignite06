const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
const Enrollment = require("../models/Enrollment");

// GET impact stats
router.get("/", async (req, res) => {
    try {
        const mealsSaved = await Food.countDocuments({ status: "collected" });
        const studentsEnrolled = await Enrollment.countDocuments({ status: "approved" });
        
        res.json({ mealsSaved, studentsEnrolled });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
