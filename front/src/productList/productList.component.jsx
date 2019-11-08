import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products, handleClick }) {
  return (
    <div className="main">
      {products.map(product => (
        <div className="card card-width"  key={product.id}>
          <Link className="thumbnail" to={`/product/${product.id}`}>
            <img src={product.img1Url} className="card-img-top"></img>
          </Link>

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>

            <h5 className="card-title">{product.price}</h5>

            <h5 className="card-title">{product.ratingValue}</h5>
            {product.categories.map(category => (
              <i key={category.id} className="card-title">
                #{category.name}
              </i>
            ))}
            <br></br>
            <button type="button" className="btn btn-secondary">
              Deseo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
