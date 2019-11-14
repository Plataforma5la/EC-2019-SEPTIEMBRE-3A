import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiThermometer } from "react-icons/ti";
import { GoTrashcan } from "react-icons/go";
import { IoIosEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

function ProductList({
  products,
  handleAddToCart,
  renderPageNumbers,
  user,
  handleDelete,
  handleDisplay
}) {
  return (
    <div className="main container">
      <div className="row">
        {products.map(
          product =>
            !user.isAdmin &&
            product.display && (
              <div className="card card-width col-3" key={product.id}>
                <Link className="thumbnail" to={`/product/${product.id}`}>
                  <img src={product.img1Url} className="card-img-top"></img>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h5 className="card-title">US$ {product.price}</h5>
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
                  <SnackbarProvider position="bottom">
                    <Container handleAddToCart={handleAddToCart} product={product} message='Agregado al carrito!'/>
                  </SnackbarProvider>
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Deseo
                  </button> */}
                 
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            )
        )}

        {user.isAdmin &&
          products.map(product => (
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
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={e => handleDelete(product)}
                  >
                    <GoTrashcan />
                  </button>
                  <span> </span>
                  {product.display ? (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={e => handleDisplay(product)}
                    >
                      <IoMdEyeOff />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={e => handleDisplay(product)}
                    >
                      <IoIosEye />
                    </button>
                  )}
                </div>
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


const Container = wrapComponent(function({ createSnackbar, handleAddToCart, product, message }) {
  function showSnackbar() {
    createSnackbar({
      message: message,
      dismissable: false,
      pauseOnHover: false,
      progressBar: false,
      sticky: false,
      theme: 'success',
      timeout: 2000
    });
  }

  return (
    <div>
      <button type="button" className="btn btn-secondary"
      onClick={()=>{showSnackbar(); handleAddToCart(product)}}>Lo deseo!</button>
    </div>
  );
});
