import React from "react";

export default ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container addProductContainer">
      <div className="addProductBox">

        <div className="row">
          <div className="col-6">
            <label>
              <input
                name="name"
                placeholder="name"
                type="text"
                onChange={e => handleChange(e)}
              />
            </label>
            <label>
              Description:
              <textarea name="description" onChange={e => handleChange(e)} />
            </label>
          </div>
          <div className="col-6">
            <label>
              Image 1 Url:
              <textarea name="img1Url" onChange={e => handleChange(e)} />
            </label>
            <label>
              Image 2 Url:
              <textarea name="img2Url" onChange={e => handleChange(e)} />
            </label>
          </div>
          <div className="col-4">
            <label>
              Stock:
              <input
                name="stock"
                placeholder="stock"
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
                placeholder="price"
                type="number"
                onChange={e => handleChange(e)}
              />
            </label>
          </div>
          <div className="col-6">
          </div>
        </div>
      </div>
        <input type="submit" />
      </div>
    </form>
  );
};
