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


const setCategories = function(categories){
    return {
        type: 'SET_CATEGORIES',
        categories: categories
    }
  }

const setCategory = function(category){
    return {
        type: 'SET_CATEGORY',
        category: category
    }
  }

export const getCategories = function() {
    return function (dispatch, getState) {
      axios.get(`http://localhost:3000/api/categories`)
        .then(response => {
          dispatch(setCategories(response.data)); 
        });
    };
  };

  export const filterCategory = function(category) {
          dispatch(setCategory(category));
  };
