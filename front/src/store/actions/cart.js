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

<<<<<<< HEAD
// Add products to cart when user is not logged, only add to state, not to database //
=======
export const fetchCartFromLocalStorage = function() {
  return function(dispatch, getState) {
    console.log("@@@LLEGO A LA ACCION");
    let cart = JSON.parse(localStorage.getItem("CART")) || [];
    dispatch(setCart(cart));
  };
};
>>>>>>> de70bacc6b35b90f3031be540beeb7f68e81ae0c

export const addToCartState = function(product) {
  let existing = JSON.parse(localStorage.getItem("CART")) || [];

  for (let i = 0; i < existing.length; i++) {
    if (existing[i].id == product.id) {
      existing[i].cart_product.count += 1;
      localStorage.setItem("CART", JSON.stringify(existing));
      return function(dispatch, getState) {
        dispatch(addToCartAction(product));
      };
    }
  }

  existing.unshift(product);
  existing[0].cart_product = {};
  existing[0].cart_product.count = 1;
  localStorage.setItem("CART", JSON.stringify(existing));
  return function(dispatch, getState) {
    dispatch(addToCartAction(product));
  };
};

// Add products to cart when user is loogged and persiste de data on the database //

export const addToCartDbState = function(product) {
  return function(dispatch, getState) {
    axios.put("/api/cart", { product: product }).then(response => {
      dispatch(addToCartAction(product));
    });
  };
};

export const fetchCart = function() {
  return function(dispatch, getState) {
    axios.get("/api/cart").then(response => {
      if (response.data) {
        dispatch(setCart(response.data.products));
      } else {
        dispatch(setCart([]));
      }
    });
  };
};

export const emptyCart = function() {
  return function(dispatch, getState) {
    dispatch(setCart([]));
  };
};

export const createCart = function(products) {
  return function(dispatch, getState) {
    axios.post("/api/cart", { products }).then(response => {
      if (response.data === true) {
        dispatch(setCart(products));
      } else {
        dispatch(setCart(response.data[0].products));
      }
    });
  };
};

export const deleteProduct = function(product) {
  return function(dispatch, getState) {
    console.log("PRODUCT EN EL FRONT", product.id), axios.delete(`/api/cart/`);
  };
};

export const deleteCart = function(cart) {
  //solo llega acá si estoy logeado, sino borra el state
  return function(dispatch, getState) {
    let cartid = cart[0].cart_product.cartId;
    axios
      .delete("/api/cart", { data: { cartid } })
      .then(res => console.log("AAAAAAAAAAAAAAAAAAAAAA", res.data));
  };
};
