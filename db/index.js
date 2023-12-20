// const { Client } = require("pg");
// require("dotenv").config();

// const client = new Client({
//   connectionString: process.env.DATABASE_CONNECTION,
// });

// client
//   .connect()
//   .then(() => console.log("Connected"))
//   .catch((e) => console.log("Error", e));


// module.exports = client

const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'aondatabase',
    password: 'ali99death',
    port: '5432',
});

client
 .connect()
  .then(() => console.log("Connected"))
  .catch((e) => console.log("Error", e));




  module.exports = client