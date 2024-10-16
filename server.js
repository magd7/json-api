const express = require('express');
const fs = require('fs'); // مكتبة التعامل مع الملفات
const app = express();
const port = 3000;

// Middleware لمعالجة JSON
app.use(express.json());

// قراءة ملف index.html
let htmlContent = '';
fs.readFile('index.html', 'utf-8', (err, htmlData) => {
    if (err) {
        console.log('Error reading HTML file', err);
        return;
    }
    htmlContent = htmlData;
});

// نقطة الوصول للحصول على محتوى index.html
app.get('/api/users', (req, res) => {
    res.send(htmlContent);  // إرسال محتوى ملف HTML كاستجابة
});

// تشغيل السيرفر
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
