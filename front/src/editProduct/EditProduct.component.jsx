import React from "react";
import { Link } from "react-router-dom";

export default ({ handleChange, handleSubmit, product }) => {
    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="container addProductContainer">
                <div className="addProductBox">
                    <br />
                    <div className="row">
                        <div className="col-4">
                            <label>
                                Name: &nbsp; &nbsp;
                                <input
                                    //poner default placeholder la info del producto pasada por props desde single product
                                    name="name"
                                    value={product.name}
                                    type="text"
                                    onChange={e => handleChange(e)}
                                />
                            </label>
                        </div>

                        <br />
                        <div className="col-4">
                            <label>
                                Stock: &nbsp; &nbsp;
              <input
                                    name="stock"
                                    value={product.stock}
                                    type="number"
                                    onChange={e => handleChange(e)}
                                />
                            </label>


                        </div>
                        <div className="col-4">
                            <label>
                                Price: &nbsp; &nbsp;
              <input
                                    name="price"
                                    value={product.price}
                                    type="number"
                                    onChange={e => handleChange(e)}
                                />
                            </label>

                        </div>

                    </div>
                    <br />
                    <div className="row">

                        <div className="col-4">
                            <label>
                                Description: &nbsp; &nbsp;
                                    <textarea value={product.description} name="description" onChange={e => handleChange(e)} />
                            </label>
                        </div>
                        <div className="col-4">
                            <label>
                                Image 1 Url: &nbsp; &nbsp;
              <textarea name="img1Url" onChange={e => handleChange(e)} value={product.img1Url} />
                            </label>
                        </div>
                        <div className="col-4">
                            <label>
                                Image 2 Url: &nbsp; &nbsp;
              <textarea name="img2Url" onChange={e => handleChange(e)} value={product.img2Url} />
                            </label>
                        </div>

                    </div>
                    <br />
                </div>
                <br />
                <Link to="/"> <button className="botonesEditarCrear" type="submit"> Submit </button> </Link>
            </div>
        </form >
    );
};
