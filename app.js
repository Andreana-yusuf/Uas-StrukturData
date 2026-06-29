const express = require('express');
const app = express();
const PORT = 8087;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "Selamat Dre! Web UAS lo berhasil deploy via CI/CD GitHub Actions!",
    author: "Andreana Yusuf"
  });
});

app.listen(PORT, () => {
  console.log(`Server jalan ngebut di port ${PORT}`);
});
