import axios from "axios";

export const searchSingleProductData = productData => ({
  type: "SEARCH_SINGLEPRODUCTDATA",
  productData
});

const editSingleProductData = productData => ({
  type: "EDIT_SINGLE_PRODUCT",
  productData
});

const editSingleProduct = product => dispatch => {
  axios
    .put(`/api/admin/editproduct/${product.id}`, { product })
    .then(res => res.data) //recibo la data del back //
    .then(productData => dispatch(editSingleProductData(productData)));
};

const fetchSingleProductData = productid => dispatch =>
  axios
    .get(`/api/singleProduct/${productid}`)
    .then(res => res.data) //recibo la data del back
    .then(productData => dispatch(searchSingleProductData(productData)));

const addCategoryToProduct = idsObject => dispatch =>
  axios
    .put("/api/singleProduct/", idsObject)
    .then(res => res.data)

    .then(productData => dispatch(searchSingleProductData(productData)));

export { fetchSingleProductData, editSingleProduct, addCategoryToProduct };
