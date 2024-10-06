const ProductRouter = require('./Product/Router');
const OrderRouter = require('./Order/Router');
module.exports ={
    'product':{
        ProductRouter
    }
    ,'order':{
        OrderRouter
    }
};