require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const apiRoutes = require("./routes");

const PORT = process.env.PORT || 5500;

// middleware
app.use(express.json());
app.use(cors());

// All routes
app.use("/api", apiRoutes);

// Listening to PORT
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, "0.0.0.0", () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("DB Connection Error:", err));
