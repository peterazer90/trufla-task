import {useEffect, useState} from 'react';
import {GetData} from "../api/Api-Methods";
import {GET_PROMOTION} from "../api/Api-Urls";
import {CouponFilter} from "./Coupon-Filter";

function useMergePromotionWithProduct(products, couponFilter) {
    const [mergedProducts, getMeredProducts] = useState([]);
    const mergeFunction = async () => {
        if (products) {
            const {products: productArr, productPromotion: promotionArr} = products;
            const merge = productArr.map(async product => {
                for (let i = 0; i < promotionArr.length; i++) {
                    if (product._id === promotionArr[i].product_id) {
                        const promotion = await GetData(GET_PROMOTION(promotionArr[i].promotion_id))
                        return {...product, promotion}
                    }
                }
                return {...product, promotion: false}
            })
            const promise = await Promise.all(merge);
            getMeredProducts(promise);
            if (couponFilter) getMeredProducts(CouponFilter(promise, couponFilter))
        }
    }
    useEffect(() => {
            mergeFunction().then()
        }, [products, couponFilter]
    )
    return [mergedProducts];
}

export default useMergePromotionWithProduct;