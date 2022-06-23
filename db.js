//const { Client } = require('pg');

// const Pool = require('pg').Pool;

// const client = new Client({
//     connectionString: 'postgres://zjbkfclyhxhqpq:eff178d484ab75ac305b9a8d094622ac8bab80dd9a787b46b5691cf76b31f072@ec2-18-234-17-166.compute-1.amazonaws.com:5432/d7ttl5r80id9bq',
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// client.connect();

// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
