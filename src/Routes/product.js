const express = require('express');
const productController = require('../Controllers/product');

const Router = express.Router();

Router.get('/search', productController.searchProduct);
Router.get ('/', productController.getProduct);
Router.get ('/:id', productController.getProductById);

//Router.get('/search', () => {console.log(hai)});
Router.post ('/', productController.postProduct);
Router.delete('/:id', productController.deleteProduct);
Router.put('/:id', productController.updateProduct);
Router.patch ('/add', productController.addQuantity);
Router.patch ('/reduce', productController.reduceQuantity);


module.exports = Router;
