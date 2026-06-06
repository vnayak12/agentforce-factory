const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root
app.use(express.static(path.join(__dirname), {
  extensions: ['html'],
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-cache');
  }
}));

// SPA fallback — serve index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Agentforce POV Studio running on port ${PORT}`);
});
