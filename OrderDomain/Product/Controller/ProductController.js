const ProductModel = require('../Model/Product');
const ProductService = require('../Services/ProductService');
const ProductServices = require('../Services/ProductService');

const getAllProducts = async(req, res) => {
    const products = await ProductModel.find(); 
   res.json(products);
}



const addNewProduct = async(req, res) => {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).json(product);
}

const getProductById=  async(req, res) => {
    try {
        const productById = await ProductServices.getProductById(req.params.productId);
        res.status(200).json(productById);
    }
    catch (error) {
        res.status(404).json({ message: 'Product not found' });
    }
}

module.exports={
    getAllProducts,
    addNewProduct,
    getProductById,
 
};