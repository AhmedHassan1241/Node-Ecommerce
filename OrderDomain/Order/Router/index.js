const express= require('express');
const OrderController = require('../../Order/Controller/OrderController');

const router = express.Router();

router.route('/')
.post(OrderController.addNewOrder)
.get(OrderController.getOrders)

router.route('/:orderId')
.get(OrderController.orderById)

module.exports = router;