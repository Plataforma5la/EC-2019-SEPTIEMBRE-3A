import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaShoppingCart } from "react-icons/fa";
import { TiThermometer } from "react-icons/ti";

export default function ({ product }) {
  return (
    <div className="container">
      <div className="singleProductContainer">
        <div className="row">
          <div> </div>
        </div>
        <div className="row">
          <div className="singleProducPicBox col-4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 singleProductPic"
                  src={product.img1Url}
                  alt="Dildo pic"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 singleProductPic"
                  src={product.img2Url}
                  alt="Dildo pic"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-4">
            <h1 className="singleProductDescription">{product.name}</h1>
            <p className="singleProductDescription">{product.description}</p>
            {/* <p className="singleProductCategoriesTag"></p> */}
            <button>
              <FaShoppingCart />
            </button>
          </div>
          <div className="col-4">
            <h4 className="singleProductDescription">
              Rating: <TiThermometer />
              <TiThermometer />
              <TiThermometer />
              {product.rating}
            </h4>
            <p className="singleProductDescription">
              Robusto: Buen producto para lo que vale, se ve que el motor es
              bueno porque tiene buena potencia. Trae un juego de carbones de
              repuesto. Lo probé con mechas de copa y normales para madera y va
              perfecto. El mandril es un poco tosco, en general los acabados no
              son excelentes pero es un gran producto para trabajar tranquilo y
              por el precio vale mucho la pena.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
