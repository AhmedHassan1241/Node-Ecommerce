const express= require('express');
const ProductController = require('../Controller/ProductController');

const router = express.Router();


router.route('/')
.get(ProductController.getAllProducts)
.post(ProductController.addNewProduct)

router.route('/:productId')
.get(ProductController.getProductById)

module.exports = router;