import axios from "axios";

const searchProductList = products => ({
  type: "SEARCH_PRODUCTLIST",
  products
});

export const fetchProductList = () => dispatch =>
  axios
    .get("/api/products")
    .then(res => res.data) //recibo la data del back //
    .then(products => dispatch(searchProductList(products)));

export const fetchFilteredProductList = (catId) => dispatch =>
  axios
    .get(`/api/products/category/${catId}`)
    .then(res => res.data) //recibo la data del back //
    .then(category => dispatch(searchProductList(category.products)));
