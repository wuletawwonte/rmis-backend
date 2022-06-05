const express = require("express");
const route = express.Router();
const db = require("../db");

route.get('/', async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM users;');
    res.json(users.rows);
  }
  catch(err) {
    console.log(err);
  }
});


module.exports = route;