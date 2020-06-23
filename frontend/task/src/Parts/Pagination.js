import React, {useContext, useState} from 'react';
import {Badge, Col, Flex, Typography} from "../helpers/Styles";
import {DeploymentIDContext, ProductsContext} from "../helpers/Contexts";
import {GetProductData} from "../helpers/Get-Product-Data";

function Pagination() {
    const [pageNumber, getPageNumber] = useState(1);
    const pagination = [];
    const {products, getProducts, deploymentId, query} = useContext(ProductsContext);
    const counts = products && (products.count / 4) + 1;

    if (products) for (let i = 1; i < counts; i++) pagination.push(i);
    const onPaginationClick = (num) => {
        getPageNumber(num)
        GetProductData(deploymentId, num, query).then(res => getProducts(res))
    }

    return (
        <Flex justifyContent={'center'}>
            {products && pagination.map(page =>
                <Col key={page} padding={'0 5px 5px 0'}>
                    <Badge background={(pageNumber !== page) ? '#fff' : '#e4e4e4'}
                           onClick={() => onPaginationClick(page)}>
                        <Typography as={'p'}>{page}</Typography>
                    </Badge>
                </Col>
            )}
        </Flex>
    );
}

export default Pagination;