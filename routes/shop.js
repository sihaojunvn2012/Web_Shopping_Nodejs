const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const Product_Controller = require('../controller/product')

router.get('/Products',Product_Controller.Get_Product_List);
router.get('/Products/:ProductID',Product_Controller.Get_Product);

router.get('/Cart',Product_Controller.Get_Cart);

router.get('/',Product_Controller.Get_Index);

router.get('/orders', Product_Controller.getOrders);

router.get('/checkout', Product_Controller.getCheckout);



module.exports= router;