const express= require('express');
const mongoDB= require('./Infrastructure/Database/MongoDB');
const OrderDomain= require('./OrderDomain/');



const app = express();
const PORT = 9085;

app.use(express.json());

mongoDB.connect()

// Routes
app.use('/orderdomin/products', OrderDomain.product.ProductRouter);
app.use('/orderdomin/orders', OrderDomain.order.OrderRouter);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


