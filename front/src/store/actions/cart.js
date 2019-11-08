import axios from "axios";

const addToCartAction = function(product) {
  return {
    type: "ADD_TOCART",
    product: product
  };
};

const setCart = function(cart) {
    return {
      type: "SET_CART",
      cart: cart
    };
  };

export const addToCartState = function(product) {
  return function(dispatch, getState) {
      dispatch(addToCartAction(product));
    }
};

export const addToCartDbState = function(product) {
    return function(dispatch, getState) {
      axios.post("/api/cart", {product: product}).then(response => {
          dispatch(addToCartAction(product));
      });
    };
  };


export const fetchCart = function() {
    return function(dispatch, getState) {
      axios.get("/api/cart").then(response => {
        dispatch(setCart(response.data));
      });
    };
  };