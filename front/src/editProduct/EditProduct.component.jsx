import React from "react";
import { Link } from "react-router-dom";

export default ({ handleChange, handleSubmit, product }) => {
    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="container addProductContainer">
                <div className="addProductBox">
                    {console.log("productooo " + JSON.stringify(product))}
                    <div className="row">
                        <div className="col-6">
                            <label>
                                <input
                                    //poner default placeholder la info del producto pasada por props desde single product
                                    name="name"
                                    value={product.name}
                                    type="text"
                                    onChange={e => handleChange(e)}
                                />
                            </label>
                            <label>
                                Description:
              <textarea value={product.description} name="description" onChange={e => handleChange(e)} />
                            </label>
                        </div>
                        <div className="col-6">
                            <label>
                                Image 1 Url:
              <textarea name="img1Url" onChange={e => handleChange(e)} value={product.img1Url} />
                            </label>
                            <label>
                                Image 2 Url:
              <textarea name="img2Url" onChange={e => handleChange(e)} value={product.img2Url} />
                            </label>
                        </div>
                        <div className="col-4">
                            <label>
                                Stock:
              <input
                                    name="stock"
                                    value={product.stock}
                                    type="number"
                                    onChange={e => handleChange(e)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label>
                                Price:
              <input
                                    name="price"
                                    value={product.price}
                                    type="number"
                                    onChange={e => handleChange(e)}
                                />
                            </label>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
                <Link to="/"> <button type="submit"> Submit </button> </Link>
            </div>
        </form >
    );
};
