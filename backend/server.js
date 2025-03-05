require('dotenv').config({ path: "./config/.env" });
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./database'); // Import DB connection function
const router = require("./Router/router"); // Import the router

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use('/api', router); // Correct way to use routes

// Home Route - Displays DB connection status
app.get("/", (req, res) => {
    const status = require("mongoose").connection.readyState;
    let message = "";
  
    switch (status) {
      case 0:
        message = "Disconnected";
        break;
      case 1:
        message = "Connected";
        break;
      case 2:
        message = "Connecting...";
        break;
      case 3:
        message = "Disconnecting...";
        break;
      default:
        message = "Unknown State";
    }
  
    res.json({ database_status: message });
  });
  

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
