import axios from "axios";

const searchProductList = products => ({
  type: "SEARCH_PRODUCTLIST",
  products
});

const fetchProductList = () => dispatch =>
  axios
    .get("/api/products")
    .then(res => res.data) //recibo la data del back //
    .then(products => dispatch(searchProductList(products)));

export default fetchProductList;
