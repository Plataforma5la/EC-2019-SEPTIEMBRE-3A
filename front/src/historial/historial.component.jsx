import React from "react";
import ReviewContainer from "../review/review.container";

export default function({ history }) {
  return (
    <div className="container cartProductsContainer">
      {history &&
        history.map(cart => (
          <div key={cart.id} className="row cartSingleProductBox">
            <div className="col-3">
              <h5>Número de orden: {cart.id}</h5>
              <h5>Estado: {cart.status}</h5>
            </div>

            {cart.products.map(product => (
              <div className="col-3" key={product.id}>
                <p>Producto: {product.name}</p>
                {cart.status === "closed" && (
                  <div className="col-2 reviewButtonBox">
                    <ReviewContainer  productId={product.id} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
