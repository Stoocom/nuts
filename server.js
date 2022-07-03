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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // production
  app.use(express.static(path.join(__dirname, "build")));
  app.use(favicon(__dirname + "/build/favicon.ico"));
  app.use("/api", router);
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
  });
} else {
  // development
  app.use(express.static(path.join(__dirname, "public")));
  app.use("/api", router);
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
}

app.use((err, req, res, next) => {
  console.log("После миддвара");
  if (err instanceof ApiError) {
    console.log(err);
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка!" });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

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
