var express = require('express');
var router = express.Router();

var ProductsController = require('../controller/ProductsController');

router.get ('/products',      ProductsController.findAll.bind(ProductsController));
router.get ('/products/:_id', ProductsController.findOne.bind(ProductsController));
router.post('/products',      ProductsController.create.bind(ProductsController));
router.put ('/products/:_id', ProductsController.update.bind(ProductsController));
router.delete('/products/:_id', ProductsController.delete.bind(ProductsController));

module.exports = router;
