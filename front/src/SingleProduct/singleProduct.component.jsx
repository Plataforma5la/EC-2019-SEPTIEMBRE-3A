import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaShoppingCart } from "react-icons/fa";
import { TiThermometer } from "react-icons/ti";
import Youtube from "react-youtube";
import { getThemeProps } from "@material-ui/styles";
import { GoTrashcan } from "react-icons/go";

export default function({ product, handleAddToCart, user, handleDelete }) {
  return (
    <div className="container">
      <div className="singleProductContainer">
        <div className="row">
          <div> </div>
        </div>
        <div className="row">
          <div data-interval="false" className="singleProducPicBox col-4">
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

              {/* INTENTOS DE VIDEO, POR AHORA NO BORRAR  */}

              {/* <Carousel.Item> */}
              {/* <iframe id="ytplayer" type="text/html" 
  src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"/> */}
              {/* <Youtube    className="d-block w-100 singleProductVideo"
                 videoId="IPfG4OdGEyI"
              /> */}
              {/* <img
                  className="d-block w-100 singleProductPic"
                  src={product.img2Url}
                  alt="Dildo pic"
                /> */}
              {/* </Carousel.Item> */}
            </Carousel>
          </div>
          <div className="col-4">
            <h1 className="singleProductDescription">{product.name}</h1>
            <span></span>
            {product.categories
              ? product.categories.map(category => (
                  <span
                    key={category.id}
                    className="badge singleProductCategoriesTag badge-secondary"
                  >
                    {category.name}
                  </span>
                ))
              : ""}
            <p className="singleProductDescription">{product.description}</p>
            <div className="container">
              <div className="row">
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

                <p className="singleProductPrice col-5">
                  {" "}
                  Precio: ${product.price}
                </p>
              </div>
            </div>
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
