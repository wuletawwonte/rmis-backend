const Pool = require('pg').pool();

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  post: 5432,
  database: 'rmis'
});

module.exports = pool;