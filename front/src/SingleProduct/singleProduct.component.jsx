import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaShoppingCart } from "react-icons/fa";
import { TiThermometer } from "react-icons/ti";
import Youtube from "react-youtube";
import { getThemeProps } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
import _ from "lodash";

export default function({
  product,
  categories,
  handleAddToCart,
  user,
  handleDelete,
  handleAddCategory,
  handleSubstractCategory,
  submitCategory,
  selectedCategory,
  existingCategories
}) {
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
            </Carousel>
          </div>
          <div className="col-4 ">
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
            {user.isAdmin ? (
              <div className="container">
                <div className="row">
                  <div className="col-4 categoriesTagContainer">
                    {" "}
                    <form>
                      <select
                        className="BackgroundcolorGrayWhiteFont"
                        onChange={e => submitCategory(e.target.value)}
                      >
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>
                            {" "}
                            {category.name}{" "}
                          </option>
                        ))}
                      </select>
                    </form>{" "}
                  </div>
                  <div className="col-2">
                    {" "}
                    {existingCategories.includes(parseInt(selectedCategory)) ? (
                      <button
                        className="addOrDeleteCategoryButton"
                        onClick={e => handleSubstractCategory()}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        className="addOrDeleteCategoryButton"
                        onClick={e => handleAddCategory()}
                      >
                        +
                      </button>
                    )}
                  </div>
                  <div className="col-6">
                    {" "}
                    {user.isAdmin ? (
                      <Link to={`/editproduct/${product.id}`}>
                        <button id="botonEditarProducto">
                          Editar producto
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <p className="singleProductDescription">{product.description}</p>
            <div className="container">
              <div className="row">
                {user.isAdmin ? (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={e => {alert('Producto eliminado!');handleDelete(product)}}
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
          <div className="col-4 singleProductReviewsBox">
            <h4 className="singleProductDescription">
              Calificación:
              {product.ratingCount ? (
                _.range(
                  Math.ceil(product.ratingValue / product.ratingCount)
                ).map(() => <TiThermometer key={Math.random()} />)
              ) : (
                <p id="sinPuntuar"> Este producto aún no ha sido puntuado.</p>
              )}
            </h4>
            <h4 className="singleProductDescription opiniones">Opiniones:</h4>
            {console.log(product.reviews)}
            {product.reviews && product.reviews.length ? (
              product.reviews.map(review => (
                <p className="singleReview" key={Math.random()}>
                {_.range(
                  Math.ceil(review.score)
                ).map(() => <TiThermometer key={Math.random()} />)}
                  {review.content}
                </p>
              ))
            ) : (
              <p className="singleReview"> No hay comentarios. Se el primero!</p>
            )}

            <p className="singleProductDescription"> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
