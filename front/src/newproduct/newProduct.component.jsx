import React from "react";

export default ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" onChange={e => handleChange(e)} />
      </label>
      <label>
        Description:
        <textarea name="description" onChange={e => handleChange(e)} />
      </label>
      <label>
        Price:
        <input name="price" type="number" onChange={e => handleChange(e)} />
      </label>
      <label>
        Stock:
        <input name="stock" type="number" onChange={e => handleChange(e)} />
      </label>
      <label>
        Image 1 Url:
        <textarea name="img1Url" onChange={e => handleChange(e)} />
      </label>
      <label>
        Image 2 Url:
        <textarea name="img2Url" onChange={e => handleChange(e)} />
      </label>
      <input type="submit" />
    </form>
  );
};
