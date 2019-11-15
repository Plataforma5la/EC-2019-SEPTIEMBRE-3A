import React from "react";
import { Table } from "react-bootstrap";

export default function({ order }) {
  return (
    <div className="container cartProductsContainer columCategoryEditTable">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.products &&
            order.products.map(product => (
              <tr key={product.id}>
                <td className="columCategoryEditTable">{product.id}</td>
                <td className="columCategoryEditTable">{product.name}</td>
                <td className="columCategoryEditTable">
                  {product.cart_product.count}
                </td>
                <td className="columCategoryEditTable">
                  ${product.price * product.cart_product.count}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
