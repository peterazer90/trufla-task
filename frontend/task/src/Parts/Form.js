import React, {useContext, useEffect, useState} from 'react';
import {GET_DEPARTMENTS} from "../api/Api-Urls";
import {GetData} from "../api/Api-Methods";
import {ProductsContext} from "../helpers/Contexts";
import {GetProductData} from "../helpers/Get-Product-Data";
import Select from "../components/Select";
import Input from "../components/Input";
import Alert from "../components/Alert";

function Form() {
    const [departments, getDepartment] = useState(null);
    const [isValid, getValid] = useState(true);
    const {getProducts, getCouponFilter, deploymentId, getDeploymentId, query, getQuery} = useContext(ProductsContext);

    useEffect(() => {
        GetData(GET_DEPARTMENTS).then((res) => getDepartment(res));
    }, [])

    const onSearchInput = ({target: {value}}) => {
        getQuery(value)
        GetProductData(deploymentId, 1, value).then(res => getProducts(res))
    }

    const onDepartmentInput = ({target: {value}}) => {
        getDeploymentId(value)
        GetProductData(value, 1, query).then(res => getProducts(res))
    }

    const onCouponInput = ({target: {value}}) => {
        if (value.length < 4) getValid(false);
        else {
            getValid(true)
            getCouponFilter(Number(value))
        }
    }

    return (
        <>
            <Input type={'text'} onChange={onSearchInput}
                   placeHolder={'Search By Product Name'}
            />
            <Select onChange={onDepartmentInput} departments={departments}/>
            <Input type={'number'} onChange={onCouponInput}
                   placeHolder={'Write Your Coupon Code'}
                   alert={<Alert/>} isValid={isValid}
            />
        </>
    );
}

export default Form;