import React from "react";

export default ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container addProductContainer">
        <div className="addProductBox">
          <br />
          <div className="row">
            <div className="col-4">
              <label>
                Name: &nbsp; &nbsp;
              <input
                  name="name"
                  placeholder="name"
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
                  placeholder="stock"
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
                  placeholder="price"
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
                Description:
              <textarea minLength="30" maxLength="50" name="description" onChange={e => handleChange(e)} />
              </label>
            </div>
            <div className="col-4">
              <label>
                Image 1 Url:
              <textarea name="img1Url" onChange={e => handleChange(e)} />
              </label>
            </div>
            <div className="col-4">
              <label>
                Image 2 Url:
              <textarea name="img2Url" onChange={e => handleChange(e)} />
              </label>
            </div>
          </div>
          <br />
        </div>
        <br />
        <input className="botonesEditarCrear" type="submit" />
      </div>
    </form>
  );
};
