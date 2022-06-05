const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/user');

// Middlewares
app.use(cors());
app.use(express.json());

// Routes 
app.use('/api/v1/user', userRoutes);

app.use((req, res, next) => {
  const error = new Error('Endpoint Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  })
});

module.exports = app;