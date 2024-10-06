const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    quantity: {type: Number, required: true}
    
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;