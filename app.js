const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const authenticate = require('./middleware/auth');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

// Protected route example
app.get('/protected', authenticate, (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

module.exports = app;
