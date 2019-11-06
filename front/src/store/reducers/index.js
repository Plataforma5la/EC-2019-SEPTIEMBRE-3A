import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import productListReducer from "./productList-reducer";

export default combineReducers({
  logged: userReducer,
  products: productListReducer
});
