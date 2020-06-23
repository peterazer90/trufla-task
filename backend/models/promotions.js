const mongoose = require('mongoose');
const {PromotionsSchema} = require('../schemas/schemas');
const express = require('express');
const router = express.Router();

const Promotion = mongoose.model('promotion', PromotionsSchema);


async function createPromotion(code, active, discount) {
    const promotion = new Promotion({
        code: code,
        active: active,
        discount: discount
    })
    const res = await promotion.save();
    console.log(res);
}

// createPromotion(2277, false, 40);

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const promotion = await Promotion.findById(id)
    res.send(promotion)
});

module.exports = router;