const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

// Add new food
router.post("/add", async (req, res) => {
    try {
        const food = new Food(req.body);
        await food.save();
        res.status(201).json(food);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get available food
router.get("/available", async (req, res) => {
    try {
        const foods = await Food.find({ status: "available" });
        res.json(foods);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Reserve food
router.post("/request/:id", async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(
            req.params.id,
            { status: "reserved" },
            { new: true }
        );
        res.json(food);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Confirm collected
router.post("/collect/:id", async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(
            req.params.id,
            { status: "collected" },
            { new: true }
        );
        res.json(food);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
