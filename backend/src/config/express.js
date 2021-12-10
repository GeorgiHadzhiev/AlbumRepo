const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const {auth} = require('../middlewares/authMiddleware.js');

const configExpress = (app) =>{

    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
    app.use(auth);
    
}

module.exports = configExpress;