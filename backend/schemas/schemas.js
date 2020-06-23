const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: String
})

const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department'
    },
})

const ProductsPromotions = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    promotion_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'promotion'
    }
})

const PromotionsSchema = new mongoose.Schema({
    code: Number,
    active: Boolean,
    discount: Number
})

module.exports = {
    DepartmentSchema,
    ProductsSchema,
    ProductsPromotions,
    PromotionsSchema
};