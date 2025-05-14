require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const applicationRoutes = require('./routes/applications');

const app = express();

app.use(express.json());
// Middleware
app.use(cors({ origin: "https://form-production-7787.up.railway.app/" }));



// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/applications', applicationRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Space Travel Backend is Running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
