const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Handle GET request to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle POST request to the /update URL
app.post('/update', (req, res) => {
  // Call the updateFinalPrompt() function here
  updateFinalPrompt();
  // Send a response indicating that the update was successful
  res.send('Prompt updated successfully');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
