import { combineReducers } from "redux";
import moviesReducer from "./movies-reducer";
import userReducer from "./user-reducer";
import favsReducer from "./favs-reducer";

export default combineReducers({
  movies: moviesReducer,
  logged: userReducer,
  favs: favsReducer
});
