const mongoose = require('mongoose');
const {ProductsPromotions} = require('../schemas/schemas');

const ProductPromotion = mongoose.model('productspromotion', ProductsPromotions);


async function createProductPromotion(product_id, promotion_id) {
    const productPromotion = new ProductPromotion({
        product_id,
        promotion_id
    })
    const res = await productPromotion.save();
    console.log(res);

}

// createProductPromotion('5eeb99d6c3abb7248456745a', '5eee1a68f05ad431ac70223e');