import React, {useEffect, useState} from 'react';
import {Flex, Container, Col, Typography} from "../helpers/Styles";
import Form from "../Parts/Form";
import Products from "../Parts/Products";
import Pagination from "../Parts/Pagination";
import {ProductsContext} from "../helpers/Contexts";
import {GetProductData} from "../helpers/Get-Product-Data";

function Main() {
    const [products, getProducts] = useState(null);
    const [couponFilter, getCouponFilter] = useState(null);
    const [deploymentId, getDeploymentId] = useState(null);
    const [query, getQuery] = useState('');

    useEffect(() => {
        GetProductData(deploymentId, 1).then(res => getProducts(res))
    }, [])

    return (
        <Container>
            <ProductsContext.Provider value={{
                products,
                getProducts,
                couponFilter,
                getCouponFilter,
                deploymentId,
                getDeploymentId,
                query,
                getQuery
            }}>
                <Flex>
                    <Col flex={1}>
                        <Typography>
                            Filters
                        </Typography>
                        <Form/>
                    </Col>
                    <Col flex={2} padding={'0 0 0 15px'}>
                        <Typography>
                            Products
                        </Typography>
                        <Products/>
                        <Pagination/>
                    </Col>
                </Flex>
            </ProductsContext.Provider>
        </Container>
    );
}

export default Main;