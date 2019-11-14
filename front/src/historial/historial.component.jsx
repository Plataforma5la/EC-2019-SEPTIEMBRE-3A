import React from "react";
import ReviewContainer from "../review/review.container";

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
                {cart.status==='closed'&&
                <ReviewContainer productId={product.id}/>
              }
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
