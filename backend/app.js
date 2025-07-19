const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const apiRoutes = require('./routes'); // assuming index.js in routes/
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);

app.get('/', (req, res) => {
  res.send('Hello World');
});

//verbose logging middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

//morgan for logging HTTP requests
const morgan = require('morgan');
app.use(morgan('dev'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});