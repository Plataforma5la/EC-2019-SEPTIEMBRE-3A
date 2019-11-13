const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TOCART":
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.product.id) {
          state.cart[i].cart_product.count += 1;
         return Object.assign({}, state, {
          cart: [...state.cart]
          });
        }
      }

      action.product.cart_product = {};
      action.product.cart_product.count = 1;
      return Object.assign({}, state, {
        cart: [...state.cart, action.product]
      });

    case "SUBSTRACT_OFCART":
      for (let i = 0; i < state.cart.length; i++) {
        if ( state.cart[i].id == action.product.id && state.cart[i].cart_product.count > 1) {
          state.cart[i].cart_product.count -= 1;
          console.log("@@CART+1", state.cart)
          return Object.assign({}, state, {
            cart: [...state.cart]
            });
          }


        if ( state.cart[i].id == action.product.id && state.cart[i].cart_product.count == 1) {
          state.cart = state.cart.filter((item, index) => index !== i)
          console.log("@@CART0", state.cart)
          return Object.assign({}, state, {
            cart: [...state.cart]
          });
        }
      }

    case "SET_CART":
      return Object.assign({}, state, {
        cart: action.cart
      });

      case "SET_HISTORY":
        return Object.assign({}, state, {
          history: action.history
        });

    default:
      return state;
  }
};
