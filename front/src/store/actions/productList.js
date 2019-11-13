import axios from "axios";

const searchProductList = products => ({
  type: "SEARCH_PRODUCTLIST",
  products
});

export const fetchProductList = () => dispatch =>
  axios
    .get("/api/products")
    .then(res => res.data)
    .then(products => dispatch(searchProductList(products)));

export const fetchFilteredProductList = catId => dispatch =>
  axios
    .get(`/api/products/category/${catId}`)
    .then(res => res.data)
    .then(products => dispatch(searchProductList(products)));

export const fetchSearchedProductList = text => dispatch =>
  axios
    .get(`/api/products/search/${text}`)
    .then(res => res.data)
    .then(products => dispatch(searchProductList(products)));

export const createProduct = product => dispatch => {
  axios
    .post("/api/admin/newProduct", product)
    .then(res => res.data)
    .then(products => dispatch(searchProductList(products)));
};

export const deleteProduct = product => dispatch => {
  return axios
    .delete("/api/products", { data: { product } })
    .then(res => res.data)
    .then(products => dispatch(searchProductList(products)));
};

export const displayProduct = product => dispatch => {
  return axios
    .put("/api/admin/downProduct", product)
    .then(res => res.data)
    .then(products => dispatch(searchProductList(products)));
};
