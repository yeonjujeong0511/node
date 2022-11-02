const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');
const mime = require('mime-types');
const PORT = process.env.port || 8080;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'nongdam1234',
  database: 'simpleboard',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  // (2)
  destination: (req, file, cb) => {
    // (3)
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    // (4)
    cb(null, `${uuid()}.${mime.extension(file.mimetype)}`); // (5)
  },
});

const upload = multer({
  // (6)
  storage,
  fileFilter: (req, file, cb) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype))
      cb(null, true);
    else cb(new Error('해당 파일의 형식을 지원하지 않습니다.'), false);
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

app.post('/upload', upload.single('file'), (req, res) => {
  // (7)
  res.status(200).json(req.file);
});

app.use('/images', express.static(path.join(__dirname, '/images'))); // (8)

app.get('/api/insert', (req, res) => {
  const sqlQuery = `SELECT * FROM simpleboard;`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/api/insert', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = `INSERT INTO simpleboard (title, content) VALUES (?,?);`;
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send('success!');
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
