import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
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
        <h3>No podés pasar acá</h3>
      ) : (
        <div>
          <h3>Ver órdenes</h3>
          <form>
            <select onChange={handleChange}>
              <option value="open">open</option>
              <option value="processing">processing</option>
              <option value="closed">closed</option>
              <option value="cancelled">cancelled</option>
            </select>
          </form>
          <button onClick={() => filterOrders(selectedStatus)}>Filter</button>
        </div>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Buyer Email</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.buyer.email}</td>
                <td>${order.preciototalalcomprar}</td>
                <td>
                  {order.status}
                  {order.status === "processing" && (
                    <div>
                      <button onClick={() => handleAccept(order)}>
                        Accept
                      </button>
                      <button onClick={() => handleCancel(order)}>
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      ;
    </div>
  );
}
