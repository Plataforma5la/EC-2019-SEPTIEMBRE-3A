const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TOCART":
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.product.id) {
          state.cart[i].cart_product.count += 1;
          return state;
        }
      }

      action.product.cart_product = {};
      action.product.cart_product.count = 1;
      return Object.assign({}, state, {
        cart: [...state.cart, action.product]
      });

    case "SUBSTRACT_OFCART":
      for (let i = 0; i < state.cart.length; i++) {
        if (
          state.cart[i].id == action.product.id &&
          state.cart[i].cart_product.count > 1
        ) {
          state.cart[i].cart_product.count -= 1;
          return state;
        } else {
          state.cart.splice(0, i);
          Object.assign({}, state, {
            cart: [...state.cart]
          });
        }
      }

    case "SET_CART":
      return Object.assign({}, state, {
        cart: action.cart
      });

    default:
      return state;
  }
};
