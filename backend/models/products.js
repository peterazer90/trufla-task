const mongoose = require('mongoose');
const {ProductsSchema, ProductsPromotions} = require('../schemas/schemas');
const express = require('express');
const router = express.Router();
const Product = mongoose.model('product', ProductsSchema);
const ProductPromotion = mongoose.model('productspromotion', ProductsPromotions);


async function createProduct(name, price, id) {
    const product = new Product({
        name: name,
        price: price,
        department_id: id
    })
    const res = await product.save();
    console.log(res);

}

// createProduct('Apple iPhone 11 Pro with FaceTime - 64GB, 4GB RAM, 4G LTE, Gold, Single SIM & E-SIM', 1200, '5eeb7ec9acbe9d2420918008');

const getProducts = async (req, res) => {
    const department_id = req.params.id;
    const pageNumbers = req.query.pageNumber - 1;
    const search = req.query.search;
    const pageSize = 4;

    let productPromotion = [];
    let products = await Product
        .find(department_id && {department_id})
        .limit(pageSize)
        .skip(pageNumbers * pageSize);

    const count = await Product.find(department_id && {department_id}).or({name: {'$regex': new RegExp(search, "i")}}).count();

    if (search) {
        products = await Product
            .find(department_id && {department_id})
            .or({name: {'$regex': new RegExp(search, "i")}})
            .limit(pageSize)
            .skip(pageNumbers * pageSize);
    }

    for (let i = 0; i < await products.length; i++) {
        const getPromotion = await ProductPromotion.findOne({product_id: products[i]._id});
        if (getPromotion) productPromotion.push(getPromotion);

    }

    res.send({products, count, productPromotion});
}
router.get('/', getProducts);
router.get('/:id', getProducts);

module.exports = router;