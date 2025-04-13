const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/sendText', (req, res) => {
  const { chatId, text } = req.query;
  console.log(`Sending to ${chatId}: ${text}`);
  res.send(`Message to ${chatId} would be: "${text}"`);
});

app.listen(port, () => {
  console.log(`Bot running on port ${port}`);
});