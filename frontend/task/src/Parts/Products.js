import React, {useContext} from 'react';
import {Col, Flex, ProductItem, Typography} from "../helpers/Styles";
import {ProductsContext} from "../helpers/Contexts";
import useMergePromotionWithProduct from "../helpers/Merge-Promotion-With-Product";


function Products() {
    const {products, couponFilter} = useContext(ProductsContext);
    const [mergedProducts] = useMergePromotionWithProduct(products, couponFilter);
    return (
        <Flex>
            {mergedProducts && mergedProducts.map(item =>
                <Col flex={'50%'} padding={'0 5px 5px 0'} key={item._id}>
                    <ProductItem as={'div'}>
                        <Typography as={'h4'}>
                            {item.name}
                        </Typography>
                        <Flex>
                            <Col flex={'auto'}>
                                <Typography as={'p'}
                                            decoration={(item.promotion && item.promotion.active) && 'line-through'}>
                                    Price: {item.price}
                                </Typography>
                                {
                                    (item.promotion && item.promotion.active) &&
                                    <Typography as={'p'}>
                                        Discounted Price: {item.price - ((item.price * item.promotion.discount) / 100)}
                                    </Typography>
                                }
                            </Col>
                            {
                                (item.promotion && item.promotion.active) &&
                                <Col>
                                    <Typography as={'p'}>
                                        Discount: {item.promotion.discount}%
                                    </Typography>
                                </Col>
                            }
                        </Flex>
                    </ProductItem>
                </Col>
            )}
        </Flex>
    );
}

export default Products;