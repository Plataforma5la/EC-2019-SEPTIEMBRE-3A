import React from "react";
import { Link } from "react-router-dom";

export default function({
  orders,
  handleAccept,
  handleCancel,
  handleChange,
  filterOrders,
  selectedStatus,
  unAuthorized
}) {
  return (
    <div className="container cartProductsContainer">
      {unAuthorized ? (
        <h3>No podés pasar acá chanchuni</h3>
      ) : (
        <div>
          <h3>Ver órdenes</h3>
          <form>
            <select onChange={handleChange}>
              <option value="open">open</option>
              <option value="processing">processing</option>
              <option value="open">open</option>
              <option value="cancelled">cancelled</option>
            </select>
          </form>
          <button onClick={() => filterOrders(selectedStatus)}>Filter</button>
        </div>
      )}
      {orders &&
        orders.map(order => (
          <div key={order.id} className="cartSingleProductBox">
            <h3>Order ID: {order.id}</h3>

            <div>
              <p>Status: {order.status}</p>
              <p>EMAIL: {order.buyer.email}</p>

              {order.status === "processing" && (
                <div>
                  <button onClick={() => handleAccept(order)}>
                    Accept Order
                  </button>
                  <button onClick={() => handleCancel(order)}>
                    Cancel Order
                  </button>
                </div>
              )}
              <Link to={`/order/${order.id}`}>
                <button>See detail</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
