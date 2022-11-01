<<<<<<< HEAD
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = process.env.port || 8080;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "nongdam1234",
  database: "simpleboard",
=======
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const PORT = process.env.port || 8080;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'nongdam1234',
  database: 'simpleboard',
>>>>>>> f179ccc4a59217fe1d03b7ffa9c79d3e283701ed
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = `INSERT INTO simpleboard (title,content) VALUES (?,?);`;
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
=======
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
>>>>>>> f179ccc4a59217fe1d03b7ffa9c79d3e283701ed
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
