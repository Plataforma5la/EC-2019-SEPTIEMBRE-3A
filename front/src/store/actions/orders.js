import axios from "axios";

const setOrders = orders => ({
  type: "SET_ORDERS",
  orders
});

const setOrder = order => ({
  type: "SET_ORDER",
  order
});

export const fetchOrders = () => dispatch =>
  axios
    .get("/api/orders")
    .then(res => res.data)
    .then(orders => dispatch(setOrders(orders)));

export const acceptOrder = id => dispatch =>
  axios
    .put("/api/orders/confirm", { id })
    .then(res => res.data)
    .then(orders => dispatch(setOrders(orders)));

export const cancelOrder = id => dispatch =>
  axios
    .put("/api/orders/reject", { id })
    .then(res => res.data)
    .then(orders => dispatch(setOrders(orders)));

export const filterOrders = status => dispatch =>
  axios
    .put("/api/orders", { status })
    .then(res => res.data)
    .then(orders => dispatch(setOrders(orders)));

export const fetchOrder = id => dispatch => {
  return axios
    .get(`/api/orders/${id}`)
    .then(res => res.data)
    .then(order => dispatch(setOrder(order)));
};
