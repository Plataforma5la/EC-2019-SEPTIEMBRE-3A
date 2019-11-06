import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function({ product }) {
    return (
    <div className="container">
      <div className="row">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={product.img1Url}
      alt="Dildo pic"
    />
    <Carousel.Caption>
      <h1 className="productTitle">{product.name}</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={product.img1Url}
      alt="Dildo pic"
    />

    <Carousel.Caption>
      <h1 className="productTitle">{product.name}</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      <div className="row">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button>Boton de carrito</button>
      </div>
      <div className="row">
        <p>Rating: {product.rating}</p>
      </div>
    </div>
  );
}
