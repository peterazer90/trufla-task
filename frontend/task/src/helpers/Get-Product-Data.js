import {GetData} from "../api/Api-Methods";
import {GET_DEPARTMENT_PRODUCTS, GET_PRODUCTS} from "../api/Api-Urls";

export const GetProductData = async (department_id, pageNum, search) => {
    if (department_id) return await GetData(GET_DEPARTMENT_PRODUCTS(department_id, pageNum, search));
    else return await GetData(GET_PRODUCTS(pageNum, search));
}

