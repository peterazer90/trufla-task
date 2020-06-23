const baseUrl = 'http://localhost:4000/api';

export const GET_DEPARTMENTS = `${baseUrl}/departments`;
export const GET_PRODUCTS = (pagNum, search) => `${baseUrl}/products?pageNumber=${pagNum}${search && `&search=${search}`}`;
export const GET_DEPARTMENT_PRODUCTS = (id, pagNum, search) => `${baseUrl}/products/${id}?pageNumber=${pagNum}${search && `&search=${search}`}`;
export const GET_PROMOTION = (id) => `${baseUrl}/promotion/${id}`;
