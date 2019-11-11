import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiThermometer } from "react-icons/ti";

<<<<<<< HEAD

function ProductList({ products, handleAddToCart }) {
=======
function ProductList({ products, handleAddToCart, renderPageNumbers }) {
>>>>>>> 7083c249ad01b2981eb03142d06e44a61d084c31
  return (
    <div className="main container">
      <div className="row">
        {products.map(product => (
          <div className="card card-width col-3" key={product.id}>
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
              <div>
                <TiThermometer />
                <TiThermometer />
                <TiThermometer />
              </div>
<<<<<<< HEAD
              <button type="button" className="btn btn-secondary" onClick={() => handleAddToCart(product)}>
=======
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleAddToCart(product)}
              >
>>>>>>> 7083c249ad01b2981eb03142d06e44a61d084c31
                Deseo
              </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
<<<<<<< HEAD
=======
      <ul className="pagination">{renderPageNumbers}</ul>
>>>>>>> 7083c249ad01b2981eb03142d06e44a61d084c31
    </div>
  );
}

export default ProductList;
