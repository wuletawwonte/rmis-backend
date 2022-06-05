const db = require('../db');

const getUsers = async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM users;');
    res.json(users.rows);
  }
  catch(err) {
    console.log(err);
  }
};

module.exports = { getUsers } ;