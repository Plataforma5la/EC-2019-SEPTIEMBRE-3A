import axios from "axios";

const searchSingleProductData = productData => ({
  type: "SEARCH_SINGLEPRODUCTDATA",
  productData
});

const fetchSingleProductData = productid => dispatch =>
  axios
    .get(`/api/singleProduct/${productid}`)
    .then(res => res.data) //recibo la data del back //
    .then(productData => dispatch(searchSingleProductData(productData)));

export default fetchSingleProductData;
