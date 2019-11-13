import axios from "axios";

const setCategories = function(categories) {
  return {
    type: "SET_CATEGORIES",
    categories: categories
  };
};

const setCategory = function(category) {
  return {
    type: "SET_CATEGORY",
    category: category
  };
};

export const getCategories = function() {
  return function(dispatch, getState) {
    axios.get("/api/categories").then(response => {
      dispatch(setCategories(response.data));
    });
  };
};

export const filterCategory = function(category) {
  return function(dispatch, getState) {
    dispatch(setCategory(category));
  };
};

export const newCategory = category => dispatch =>
  axios
    .post("/api/admin/newCategory", category)
    .then(response => dispatch(setCategories(response.data)));

export const deleteCategory = category => dispatch => {
  return axios

    .delete("/api/categories", { data: { category } })
    .then(res => res.data)
    .then(categories => dispatch(setCategories(categories)));
};

