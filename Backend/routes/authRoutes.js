const express = require('express');
const authcontroller = require('../controllers/authcontroller');
const authRoutes = express.Router();

authRoutes.post('/signup', authcontroller.PostSignUp);
authRoutes.post('/login', authcontroller.PostLogin);

module.exports = authRoutes;
