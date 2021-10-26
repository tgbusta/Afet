const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres1980",
    host: "localhost",
    port : 5432,
    database: "afetyardim"
});

module.exports = pool;