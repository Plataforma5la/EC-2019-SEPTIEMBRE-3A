import React from "react";
import { Link } from "react-router-dom";

export default function({
  orders,
  acceptOrder,
  cancelOrder,
  handleChange,
  filterOrders,
  selectedStatus
}) {
  return (
    <div className="container cartProductsContainer">
      <form>
        <select onChange={handleChange}>
          <option value="open">open</option>
          <option value="processing">processing</option>
          <option value="open">open</option>
          <option value="cancelled">cancelled</option>
        </select>
      </form>
      <button onClick={() => filterOrders(selectedStatus)}>Filter</button>
      {orders &&
        orders.map(order => (
          <div key={order.id} className="cartSingleProductBox">
            <h3>Order ID: {order.id}</h3>

            <div>
              <p>Status: {order.status}</p>
              {order.status === "processing" && (
                <div>
                  <button onClick={() => acceptOrder(order.id)}>
                    Accept Order
                  </button>
                  <button onClick={() => cancelOrder(order.id)}>
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
