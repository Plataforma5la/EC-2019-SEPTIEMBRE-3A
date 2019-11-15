import axios from "axios";

const addToCartAction = function (product) {
  return {
    type: "ADD_TOCART",
    product: product
  };
};

const substractOfCartAction = function (product) {
  return {
    type: "SUBSTRACT_OFCART",
    product
  };
};

const setCart = function (cart) {
  return {
    type: "SET_CART",
    cart: cart
  };
};

const setHistory = function (history) {
  return {
    type: "SET_HISTORY",
    history: history
  };
};

export const fetchCartFromLocalStorage = function () {
  return function (dispatch, getState) {
    let cart = JSON.parse(localStorage.getItem("CART")) || [];
    dispatch(setCart(cart));
  };
};

export const addToCartState = function (product) {
  let existing = JSON.parse(localStorage.getItem("CART")) || [];

  for (let i = 0; i < existing.length; i++) {
    if (existing[i].id == product.id) {
      existing[i].cart_product.count += 1;
      localStorage.setItem("CART", JSON.stringify(existing));
      return function (dispatch, getState) {
        dispatch(addToCartAction(product));
      };
    }
  }

  existing.unshift(product);
  existing[0].cart_product = {};
  existing[0].cart_product.count = 1;
  localStorage.setItem("CART", JSON.stringify(existing));
  return function (dispatch, getState) {
    dispatch(addToCartAction(product));
  };
};

export const substractOfCartState = function (product) {
  let existing = JSON.parse(localStorage.getItem("CART")) || [];

  for (let i = 0; i < existing.length; i++) {
    if (existing[i].id == product.id && existing[i].cart_product.count > 1) {
      existing[i].cart_product.count -= 1;
      localStorage.setItem("CART", JSON.stringify(existing));
    } else if (
      existing[i].id == product.id &&
      existing[i].cart_product.count == 1
    ) {
      existing.splice(0, i);
      localStorage.setItem("CART", JSON.stringify(existing));
    }
  }

  return function (dispatch, getState) {
    dispatch(substractOfCartAction(product));
  };
};

// Add products to cart when user is loogged and persiste de data on the database //

export const addToCartDbState = function (product) {
  return function (dispatch, getState) {
    axios.put("/api/cart", { product: product }).then(response => {
      dispatch(addToCartAction(product));
    });
  };
};

export const substractOfCartDbState = function (product) {
  return function (dispatch, getState) {
    axios.put("/api/cart/substract", { product: product }).then(response => {
      dispatch(substractOfCartAction(product));
    });
  };
};

export const fetchCart = function () {
  return function (dispatch, getState) {
    axios.get("/api/cart").then(response => {
      if (response.data) {
        dispatch(setCart(response.data.products));
      } else {
        dispatch(setCart([]));
      }
    });
  };
};

export const emptyCart = function () {
  return function (dispatch, getState) {
    dispatch(setCart([]));
  };
};

export const createCart = function (products) {
  return function (dispatch, getState) {
    axios.post("/api/cart", { products }).then(response => {
      if (response.data === true) {
        dispatch(setCart(products));
      } else {
        dispatch(setCart(response.data[0].products));
      }
    });
  };
};

export const confirmPurchase = function (total) {
  return function (dispatch, getState) {
    axios.put("/api/cart/confirm", { total }).then(response => {
      dispatch(setCart([]));
    });
  };
};

export const fetchHistory = function () {
  return function (dispatch, getState) {
    axios
      .get("/api/cart/closed")
      .then(res => res.data)
      .then(carts => {
        if (carts) {
          dispatch(setHistory(carts));
        } else {
          dispatch(setHistory([]));
        }
      });
  };
};
