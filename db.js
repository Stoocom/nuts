//const { Client } = require('pg');
const Pool = require('pg').Pool;
// const client = new Client({
//     connectionString: 'postgres://zjbkfclyhxhqpq:eff178d484ab75ac305b9a8d094622ac8bab80dd9a787b46b5691cf76b31f072@ec2-18-234-17-166.compute-1.amazonaws.com:5432/d7ttl5r80id9bq',
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// client.connect();
const pool = new Pool({
    user: 'htbjqkbmerfaay',
    password: '50b713708132820cf83d61cf9c3ec9c00390778dc90ec7c91b319cff0432033e',
    host: 'ec2-34-205-46-149.compute-1.amazonaws.com',
    port: 5432,
    database: 'de950pubqc0ica',
    ssl: {
        rejectUnauthorized: false
    }
});


module.exports = pool;

