import axios from "axios";
import { receiveFavs } from "./favs";

const receiveUser = user => ({
  type: "RECEIVE_USER",
  user
});

export const fetchUser = () => dispatch =>
  axios
    .get("/api/me")
    .then(res => res.data)
    .then(user => {
      dispatch(receiveUser(user));
    });

export const logOutUser = () => dispatch =>
  axios.get("/api/users/logout").then(() => {
    dispatch(receiveUser({}));
    dispatch(receiveFavs([]));
  });
