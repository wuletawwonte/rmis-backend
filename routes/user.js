const express = require("express");
const route = express.Router();

const { getUsers } = require('../controllers/userController');

route.get('/', getUsers);


module.exports = route;