import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products, handleClick }) {
  return (
    <div>
      {products.map(product => (
        <div className="card" style={{ width: 200 }} key={product.id}>
          <Link
            className="thumbnail"
            to={`/${product.id}`}
            onClick={() => handleClick(product.id)}
          >
            <img src={product.img1Url} className="card-img-top"></img>
          </Link>

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h5 className="card-title">{product.price}</h5>
            <h5 className="card-title">{product.rating}</h5>
            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <button>Agregar carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
