const express = require('express');
const product = require('./product');
const category = require('./category');
const transaction = require ('./transaction');
const user =require ('./user');

const form = require('../Helpers/form');
const formError = require ('../Helpers/formerror');


const jwt = require('jsonwebtoken');
const secretKey = '12345678' ;

const Router = express.Router();

const validatorUser = (req,res,next) => { 

    jwt.verify(req.headers['x-access-token'] 
    ,secretKey
    ,(err,decoded) => { 
        if (err){
            formError.errorPage(res, err.message);
        }
        req.body.user_id = decoded;
        next();
    });
}


Router.use ('/category',category);
// Router.use ('/category',validatorUser,category);
Router.use ('/product', product);
// Router.use ('/product', validatorUser,product);
Router.use ('/transaction', validatorUser,transaction);
Router.use ('/user' , user);

module.exports = Router;
