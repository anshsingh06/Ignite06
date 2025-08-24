const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const impactRoutes = require("./routes/impactRoutes");
require("dotenv").config();

const foodRoutes = require("./routes/foodRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/food", foodRoutes);
app.use("/api/enroll", enrollmentRoutes);
app.use("/api/impact", impactRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Locally"))
.catch(err => console.error("❌ DB Connection Error:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

