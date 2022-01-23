const express = require('express');
const favicon = require('express-favicon');
const app = express();
//const cors = require('cors');
const path = require('path');
//const bodyParser = require('body-parser');
const pool = require('./db');
const port = process.env.PORT || 3001;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, './build')));

app.use(favicon(__dirname + '/build/favicon.png')); 
 
app.get('/', (req, res) => {
  console.log("api");
  console.log(process.env.NODE_ENV);
  return res.send({ message: "Hello world"});
  //res.status(200).json({ message: "I am here!"});
});

// app.use(express.json()); //req.body
// console.log(__dirname);
// app.use(express.static(path.join(__dirname, './client/build/index.html')));
//app.use('/api', express.static('./public'));

app.get('/api', (req, res) => {
  console.log("api_new");
  console.log(process.env.NODE_ENV);
  return res.send({ message: "Hello world"});
  //res.status(200).json({ message: "I am here!"});
});

// ======== middlware =========
// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//       extended: true,
//     })
//   );
//app.use(cors());


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

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });
//app.use(express.static(path.join(__dirname, './client/build')));


// if (process.env.NODE_ENV === "production") {

//   console.log(process.env.NODE_ENV === "production");
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'));
//   });
// }
// console.log(process.env.NODE_ENV);
// app.use(express.static(path.join(__dirname, './client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
//   });

// ======== routes =========


const getUsers = (req, res) => {
    console.log("getUsers")
    try {
        pool.query('SELECT * FROM public.users')
        .then(data => {
            return res.status(200).json(data.rows[0]);
        })
        .catch(err => res.status(204).json({ userFound: "No User Found" + err }));
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
};

// ======== middlware =========
// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//       extended: true,
//     })
//   );
//app.use(cors());



// app
//     .route('users')
//     .get(getUsers);
// ====== create a user ========
app.post('/users/registration', async (req, res) => {
    console.log("users/registration");
    try {
        const { id, email, password, role } = req.body;
        const newTodo = await pool.query(
          "INSERT INTO users (id, email, password, role) VALUES($1,$2,$3,$4) RETURNING *",
          [id, email, password, role]
        );
        console.log(newTodo.rows[0]);
        res.json(newTodo.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
})


// ====== get users ========
app.get('/users', async (req, res) => {
    console.log("users")
    try {
        const users = await pool.query('SELECT * FROM users');
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a todo

app.get("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await pool.query("SELECT * FROM users WHERE id = $1", [
        id
      ]);
  
      res.json(user.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
