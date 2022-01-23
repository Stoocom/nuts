const express = require('express');
const favicon = require('express-favicon');
const app = express();
//const cors = require('cors');
const path = require('path');
//const bodyParser = require('body-parser');
const pool = require('./db');
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {

  app.use(express.static(path.join(__dirname, 'build')));
  app.use(favicon(__dirname + '/build/favicon.ico'));
  console.log(process.env.NODE_ENV === "production");

  app.get('/', (req, res) => {
    console.log("api");
    console.log(process.env.NODE_ENV);
    res.send({ message: "Hello world"});
  });

  app.get('/api', (req, res) => {
    console.log("api_new");
    console.log(process.env.NODE_ENV);
    res.send({ message: "Hello world"});
  });

  app.get('/types', async (req, res) => {
    console.log("types");
    try {
      const types = await pool.query('SELECT * FROM types');
      res.json(types.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get('/users', async (req, res) => {
    console.log("users")
    try {
        const users = await pool.query('SELECT * FROM users');
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
  });
}

  app.get('/', (req, res) => {
    console.log("api");
    console.log(process.env.NODE_ENV);
    res.send({ message: "Hello world"});
    //res.status(200).json({ message: "I am here!"});
  });

  app.get('/users', async (req, res) => {
    console.log("users")
    try {
        const users = await pool.query('SELECT * FROM users');
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.get('/api', (req, res) => {
  console.log("api_new");
  console.log(process.env.NODE_ENV);
  res.send({ message: "Hello world"});
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
