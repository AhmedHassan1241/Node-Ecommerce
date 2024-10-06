const OrderModel = require("../Model/Order");

class OrderService {
    async getOrders() {
        const orders = OrderModel.find();
        return orders
    }
    // async getDoneOrders() {
    //     const orders = OrderModel.find({"status": "done"});
    //     return orders
    // }

    async getOrderById(orderId) {
        const order = await OrderModel.findById(orderId);
        if (!order) {
            throw new Error('Order not found');
        }
        return order;
    }

    async addNewOrder(products, totalPrice) {

        const newOrder = new OrderModel(
            {
                'products' : products,
                'totalPrice': totalPrice
            }
        );
        const savedOrder = await newOrder.save();
    };

    calculateOrderTotalPrice(productsDetails, requestedProducts) {
        let totalPrice = 0;
        let index = 0;
        for (let productDetails of productsDetails) {
            totalPrice += requestedProducts[index]['quantity'] * productDetails.price;
            index ++;
        }
        return totalPrice;
    }
    // checkStatus(getOrderById){
    //     let done= false;
    //     if(status === "pending" || status === "processing" || status === "shipped" || status === "delivered" || status === "cancelled"){
    //         return done;
    //     }else{
    //         done=false;
    //         return done;
    //     }
    // }
    // async updateOrderStatus(orderId, status) {
    //     const order = await OrderModel.findByIdAndUpdate(orderId, { status: status }, { new: true });
    //     if (!order) {
    //         throw new Error('Order not found');
    //     }
    //     return order;
    // }

}

module.exports = new OrderService();
