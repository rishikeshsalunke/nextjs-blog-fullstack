const mysql = require("mysql2/promise");

const pool = mysql.createPool(process.env.DB_URL);

pool.getConnection()
    .then(() => console.log("MySQL Connected "))
    .catch(err => console.log("MySQL Connection Error:", err));

module.exports = pool;
