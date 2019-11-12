import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiThermometer } from "react-icons/ti";
import { GoTrashcan } from "react-icons/go";

function ProductList({
  products,
  handleAddToCart,
  renderPageNumbers,
  user,
  handleDelete
}) {
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
              {user.isAdmin ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={e => handleDelete(product)}
                >
                  <GoTrashcan />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleAddToCart(product)}
                >
                  Deseo
                </button>
              )}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
      <ul className="pagination">{renderPageNumbers}</ul>
    </div>
  );
}

export default ProductList;
