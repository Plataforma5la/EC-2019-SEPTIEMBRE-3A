import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

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
    <div className="container cartProductsContainer columCategoryEditTable">
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
        <thead className="columCategoryEditTable">
          <tr>
            <th>Order Id</th>
            <th>Buyer Email</th>
            <th>Total</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map(order => (
              <tr key={order.id}>
                <td className="columCategoryEditTable">{order.id}</td>
                <td className="columCategoryEditTable">{order.buyer.email}</td>
                <td className="columCategoryEditTable">
                  ${order.preciototalalcomprar}
                </td>
                <td className="columCategoryEditTable">
                  {order.status}
                  {order.status === "processing" && (
                    <div>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleAccept(order)}
                      >
                        <FaCheck />
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleCancel(order)}
                      >
                        <MdCancel />
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <Link to={`/order/${order.id}`}>
                    <button className="btn btn-secondary">See more!</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
