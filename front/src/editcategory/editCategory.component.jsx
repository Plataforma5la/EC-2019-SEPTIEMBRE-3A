import React from "react";
import { Link } from "react-router-dom";

function EditCategoryComponent({ categories, handleChange, handleSubmit }) {
  return (
    <div className="categoryList">
      <ul className="list-group">
        {categories.map(cat => (
          <li className="list-group-item" key={cat.id}>
            {cat.name}
            <span> </span>
            <Link to={"/"}>
              <button
                type="button"
                className="btn btn-success"
                onClick={event => {
                  event.id = cat.id;
                  handleSubmit(event);
                }}
              >
                Edit category name
              </button>
            </Link>
            <span> </span>
            <input
              placeholder="change category name"
              name="name"
              type="text"
              onChange={e => handleChange(e)}
            ></input>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditCategoryComponent;
