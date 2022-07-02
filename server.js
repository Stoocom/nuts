require("dotenv").config();
const express = require("express");
const favicon = require("express-favicon");
const app = express();
const cors = require("cors");
const path = require("path");
const router = require("./routes/index.js");
// const pool = require("./db");
const ApiError = require("./error/ApiError");
const sequelize = require("./db");
const {
  User,
  Order,
  Product,
  ProductType,
  OrderProduct,
} = require("./models/models");

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.use(favicon(__dirname + "/favicon.ico"));
  //console.log(process.env.NODE_ENV === "production");
  //app.use(express.json());
  //app.use(express.urlencoded({ extended: true }));
  app.use("/api", router);

  // app.get("/products", async (req, res) => {
  //   console.log("products");
  //   try {
  //     const products = await pool.query("SELECT * FROM products");
  //     res.json(products.rows);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // });

  // app.get("/types", async (req, res) => {
  //   console.log("types from Server");
  //   try {
  //     const types = await pool.query("SELECT * FROM types");
  //     res.json(types.rows);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // });

  // app.get("/types/:id", async (req, res) => {
  //   console.log("types" + req.params.id);
  //   try {
  //     const products = await pool.query(
  //       `SELECT * FROM products WHERE type_id === ${req.params.id}`
  //     );
  //     res.json(products.rows);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);
// app.get('/', (req, res) => {
//     console.log("api");
//     console.log(process.env.NODE_ENV);
//     //res.send({ message: "Hello world"});
//     res.status(200).json({ message: "I am here!"});
//   });

// app.get('/users', async (req, res) => {
//   console.log("users")
//   try {
//       const users = await pool.query('SELECT * FROM users');
//       res.json(users.rows);
//   } catch (err) {
//       console.error(err.message);
//   }
// });

app.use((err, req, res, next) => {
  console.log("После миддвара");
  if (err instanceof ApiError) {
    console.log(err);
    return res.status(err.status).json({ message: err.message });
  }
  //console.log(err);
  //res.status(500);ss
  //res.status(500).json({error: 'an error occurred'});
  return res.status(500).json({ message: "Непредвиденная ошибка!" });
  //return res.status(500).send({ error: 'Something failed!' });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './build/index.html'));
// });

async function start() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
    app.listen(port, () => console.log(`App running on port ${port}.`));
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

start();
