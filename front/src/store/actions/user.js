import axios from "axios";

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
  });

export const registerUser = ({ username, email, password }) => dispatch =>
  axios
    .post("http://localhost:6969/api/users/register", {
      username,
      email,
      password
    })
    .then(res => res.data)
    .then(user => {
      dispatch(receiveUser(user));
    });

export const loginUser = function({ username, password }) {
  return function(dispatch, getState) {
    return axios
      .post("http://localhost:6969/api/users/login", { username, password })
      .then(res => res.data)
      .then(user => {
        dispatch(receiveUser(user));
      })
      .catch(err => {
        throw err;
      });
  };
};
