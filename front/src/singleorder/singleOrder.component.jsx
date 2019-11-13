import React from "react";

export default function({ order }) {
  return (
    <div className="container cartProductsContainer">
      <div className="cartSingleProductBox">
        <h3>Order ID: {order.id}</h3>
        {order.products &&
          order.products.map(product => (
            <div key={product.id}>
              <p>Producto: {product.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
