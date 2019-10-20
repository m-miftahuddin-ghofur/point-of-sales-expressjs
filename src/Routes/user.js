const express = require('express');
const userController = require('../Controllers/user');

const Router = express();

Router.post('/register', userController.registerUser);
//Router.post('/login', ()=> {console.log('cek');

Router.post('/login', userController.userLogin);

module.exports = Router;