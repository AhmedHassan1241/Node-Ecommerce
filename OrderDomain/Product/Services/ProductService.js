const Products = require('../Model/Product');
const Order = require('../../Order/Model/Order');


class ProductServices{
////////////////////////
///////////////////////


    async getProductById(id){
        const product = await Products.findById(id);
        if(!product){
            throw new Error('Product not found');
        }
        return product;
    }

    async checkProductQuantities(products) {
        const productsData = []
         for (let product of products) {
             // check if products quantity available
             const productInfo = await this.getProductById(product.id)
             if (productInfo.quantity < product.quantity) {
                 throw new Error(`Can not Order (${product.quantity}) Of (${productInfo.title}) The available quantity is (${productInfo.quantity})`);
             }
 
             productsData.push(productInfo)
         }
 
         return productsData
     }
 
////////////////////////
async decriseProductQuantity(products){ 
//     {
//     const productsData = []
//      for (let product of products) {
//          const productInfo = await this.getProductById(product.id)
//          if (productInfo.quantity >0) {

//              productInfo.quantity -= product.quantity;

//          productsData.push(productInfo)
//      }
//     //  await Promise.all(productsData.map(product => product.save()));
//     for (let product of productsData) {
//     await product.save();
//     }
//  }
// }
// let productsData = [];
for (let product of products){
    // let productsData = [];
    const productInfo = await this.getProductById(product.id);
    if(productInfo.quantity>product.quantity){
        productInfo.quantity-= product.quantity;
        // productsData.push(productInfo)
        await productInfo.save();
    }
}
//    await Promise.all(productsData.map(product=> product.save()));
}
}

module.exports = new ProductServices();