const express = require('express');
const chatRoutes = require('./routes/chat'); // Import chat routes
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', chatRoutes);  // ✅ Now /api/chat works

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


// CORS configuration
// Allow requests from specific origins
const allowedOrigins = [
  'http://localhost:3001',
  'https://mechanic-frontend.onrender.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

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