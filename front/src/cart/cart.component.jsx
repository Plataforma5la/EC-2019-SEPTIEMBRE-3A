import React from "react";
import { Link } from "react-router-dom";

export default function cartComponent({
  cart,
  handleEmptyCart,
  handleSubstractOfCart,
  handleAddToCart
}) {
  return (
    <div className="container cartProductsContainer">
      {cart.length ? (
        cart.map(product => (
          <div key={product.id} className="row cartSingleProductBox">
            <div className="col-3">
              <img className="cartProductPic " src={product.img1Url} />
            </div>
            <div className="col-3">
              <h4>{product.name}</h4>
            </div>
            <div className="col-3">
              <p>${product.price}</p>
            </div>
            <div className="col-3">
<<<<<<< HEAD
              <button onClick={() => handleSubstractOfCart(product)}>-</button>
=======
              <button onClick={() => handleDeleteProduct(product)}>-</button>
>>>>>>> 8a936add19a8d79ede29c9ad2fca3fe67769c14a
              <p>{product.cart_product.count}</p>
              <button onClick={() => handleAddToCart(product)}>+</button>
            </div>
          </div>
        ))
      ) : (
<<<<<<< HEAD
        <h3> Tu carrito está vacio, dale placer!</h3>
      )}
      {cart.length ? (
        <button onClick={() => handleEmptyCart(cart)}>Vaciar carrito</button>
      ) : (
        ""
      )}
      {cart.length ? (
=======
          <h3> Tu carrito está vacio, dale placer!</h3>
        )}
      {/* {cart.length ?
        <button onClick={() => handleEmptyCart(cart)}>
          Vaciar carrito
            </button> : ""
      } */}
      {cart.length ?
>>>>>>> 8a936add19a8d79ede29c9ad2fca3fe67769c14a
        <Link to="/cart/confirmar-compra">
          <button>Confirmar Compra</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
