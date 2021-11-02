const express = require('express');
const route = express.Router();
const productCtrl = require('../controllers/product');

route.post('/', productCtrl.createProduct);
route.put('/:id', productCtrl.modifyProduct);
route.get('/:id', productCtrl.getOneProduct);
route.delete('/:id', productCtrl.deleteOneProduct);
route.get('/', productCtrl.getAllProducts);

module.exports = route;