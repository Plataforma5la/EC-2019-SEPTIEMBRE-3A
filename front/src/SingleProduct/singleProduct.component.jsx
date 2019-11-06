import React from "react";

export default function({ product }) {
  
  let image = product.img1Url

    return (
    <div className="container">
      <div className="row">
        {product.img2Url ? (
          <di>
            <img src={image} alt="Picture of a dildo" />
            <button className="pull-left" onClick={()=> ( image = product.img1Url)}>Flecha izq</button>
            <button className="pull-right" onClick={()=> ( image = product.img2Url)}>Flecha der</button>
          </di>
        ) : (
          <img src={product.img1Url} alt="Picture of a dildo" />
        )}


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
