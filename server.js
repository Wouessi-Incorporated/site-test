const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
