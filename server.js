const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.static(path.join(__dirname)));

// Fallback for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log('Server started on 0.0.0.0:' + port);
  console.log('Press Ctrl+C to stop');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
