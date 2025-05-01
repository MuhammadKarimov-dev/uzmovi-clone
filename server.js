const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5500;

// Statik fayllarni xizmat qilish
app.use(express.static(path.join(__dirname, './')));

// Barcha so'rovlar uchun
app.get('*', (req, res) => {
  // Agar so'ralgan fayl mavjud bo'lsa, uni yuborish
  // Aks holda 404.html sahifasini ko'rsatish
  const requestedPath = path.join(__dirname, req.path);
  
  // Asosiy sahifalar uchun yo'naltirish
  if (req.path === '/') {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else if (req.path === '/serialar' || req.path === '/serialar/') {
    res.sendFile(path.join(__dirname, 'serialar.html'));
  } else if (req.path.match(/\.(html|js|css|jpg|jpeg|png|gif|ico)$/)) {
    // Agar so'ralgan fayl mavjud bo'lsa, uni yuborish
    res.sendFile(requestedPath, (err) => {
      if (err) {
        res.status(404).sendFile(path.join(__dirname, '404.html'));
      }
    });
  } else {
    // Boshqa barcha holatlar uchun 404 sahifasini yuborish
    res.status(404).sendFile(path.join(__dirname, '404.html'));
  }
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} portda ishga tushdi`);
}); 