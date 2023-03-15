const express = require('express');
const app = express();

// Set up static files
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
