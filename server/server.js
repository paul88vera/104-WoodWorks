const express = require("express");
const app = express();
const cors = require("cors");

const apiRoutes = require("./routes");

const PORT = 5500;

// middleware
app.use(express.json());
app.use(cors());

// All routes
app.use("/api", apiRoutes);

// Listening to PORT
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is now live on:", `http://localhost:${PORT}/api`);
});
