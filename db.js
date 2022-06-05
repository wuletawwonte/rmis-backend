const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5433,
  database: 'rmis'
});

module.exports = pool;