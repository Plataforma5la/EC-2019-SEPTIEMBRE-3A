import axios from "axios";

export const receiveFavs = favs => ({
  type: "RECEIVE_FAVS",
  favs
});

export const fetchFavs = user => dispatch =>
  axios
    .get("/api/favs", { user })
    .then(res => res.data)
    .then(favs => dispatch(receiveFavs(favs)));

export const createFav = movie => dispatch =>
  axios
    .post("/api/favs", { movie })
    .then(res => res.data)
    .then(favs => dispatch(receiveFavs(favs)));

export const deleteFav = movie => dispatch => {
  return axios

    .delete("/api/favs", { data: { movie } })
    .then(res => res.data)
    .then(favs => dispatch(receiveFavs(favs)));
};
