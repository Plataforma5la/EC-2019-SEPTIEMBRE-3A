import React from "react";
import { Link } from "react-router-dom";

export default function cartComponent({
  cart,
  handleEmptyCart,
  handleSubstractOfCart,
  handleAddToCart,
  totalCalculator
}) {
  return (
    <div className="container cartProductsContainer">
      {cart.length ? (
        <div>
      {cart.map(product => (
          <div key={product.id} className="row cartSingleProductBox">
            <div className="col-3">
              <img className="cartProductPic " src={product.img1Url} />
            </div>
            <div className="col-3 my-auto">
              <h4>{product.name}</h4>
            </div>
            <div className="col-3 my-auto">
              <p>${product.price}</p>
            </div>
            <div className="col-3 my-auto">
            <div className="row">
              <button className="oneLessToCart" onClick={() => handleSubstractOfCart(product)}>-</button>
              <p>{product.cart_product.count}</p>
            <button className="oneMoreToCart" onClick={() =>  handleAddToCart(product) }>+</button>

            </div>
            </div>
          </div>
        ))}
        {totalCalculator()}
        </div>
      ) : (
        <h3> Tu carrito está vacio, dale placer!</h3>
      )}
      {cart.length ? (
        <Link to="/cart/confirmar-compra">
          <button>Confirmar Compra</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
