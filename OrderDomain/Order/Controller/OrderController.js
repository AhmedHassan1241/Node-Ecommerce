const OrderService = require("../Services/OrederService");
const ProductService = require("../../Product/Services/ProductService");

const getOrders = async (req, res) => {
  try {
    const orders = await OrderService.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: "Order not found" });
  }
};

const orderById = async (req, res) => {
  try {
    const orderById = await OrderService.getOrderById(req.params.orderId);
    res.status(200).json(orderById);
  } catch (error) {
    res.status(404).json({ message: "Order not found" });
  }
};

const addNewOrder = async (req, res) => {
  const requestedProducts = req.body.products;

  try {
    const productsDetails = await ProductService.checkProductQuantities(
      requestedProducts
    );
    const totalPrice = OrderService.calculateOrderTotalPrice(
      productsDetails,
      requestedProducts
      
    );


    await OrderService.addNewOrder(requestedProducts, totalPrice);
    await ProductService.decriseProductQuantity(requestedProducts);
    res.status(201).json("success");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addNewOrder,
  getOrders,
  orderById,
};
