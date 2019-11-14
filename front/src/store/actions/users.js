import axios from "axios";

const receiveUsers = users => ({
  type: "RECEIVE_USERS",
  users
});

export const fetchUsers = () => dispatch =>
  axios
    .get("/api/users")
    .then(res => res.data)
    .then(users => {
      dispatch(receiveUsers(users));
    });

export const setUserAsAdmin = user => dispatch =>
  axios
    .put(`/api/users/${user.id}`)
    .then(res => res.data)
    .then(users => {
      dispatch(receiveUsers(users));
    });

export const deleteUser = user => dispatch =>
  axios
    .delete("/api/admin/deleteuser", { data: user })
    .then(res => res.data)
    .then(users => {
      dispatch(receiveUsers(users));
    });
