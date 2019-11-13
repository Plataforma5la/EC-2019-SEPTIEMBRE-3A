import React from "react";

export default function({ history }) {
  return (
    <div className="container cartProductsContainer">
      {history &&
        history.map(cart => (
          <div key={cart.id} className="cartSingleProductBox">
            <h3>Carrito ID: {cart.id}</h3>
            {cart.products.map(product => (
              <div key={product.id}>
                <p>Producto: {product.name}</p>
                <button>Dejar Review</button>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
