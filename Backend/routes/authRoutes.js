const express = require('express')
const authcontroller = require('../controllers/authcontroller')
const authRoutes = express.Router();

authRoutes.post('/signup', authcontroller.signup)
authRoutes.post('/login', authRoutes.login )

module.exports = authRoutes;
