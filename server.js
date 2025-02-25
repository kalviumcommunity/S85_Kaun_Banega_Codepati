require('dotenv').config({path: "./config/.env"});
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI)
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Event listeners for database connection
db.on('error', (err) => console.error('MongoDB Connection Error:', err));
db.once('open', () => console.log('Connected to MongoDB successfully'));

// Home Route - Displays DB connection status
app.get('/', (req, res) => {
    res.json({ dbStatus: db.readyState === 1 ? 'Connected' : 'Not Connected' });
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));