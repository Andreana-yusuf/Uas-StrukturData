const express = require('express');
const app = express();
const PORT = 8087;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server jalan ngebut di port ${PORT}`);
});
