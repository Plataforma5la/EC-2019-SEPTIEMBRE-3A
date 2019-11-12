import React from "react";
import { Link } from "react-router-dom";
import { newCategory } from "../store/actions/categories";

export default function({
  categories,
  FetchProductList,
  FilterbyCategory,
  user,
  handleSubmit,
  handleChange,
  newCategory
}) {
  return (
    <div className="sidenav">
      <section>
        <h4 id="categorias">Categorias</h4>
        <Link to={`/`} onClick={() => FetchProductList()}>
          <button type="button" className="btn btn-secondary">
            VER TODAS
          </button>
        </Link>
        <ul className="list-unstyled">
          {categories.map(category => {
            return (
              <li
                key={category.id}
                className="playlist-item menu-item"
                onClick={() => FilterbyCategory(category.id)}
              >
                <Link to={`/`}>
                  <button type="button" className="btn btn-secondary">
                    {category.name}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
        {!user.isAdmin && (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Category"
                value={newCategory}
                onChange={e => handleChange(e)}
              />
            </form>
            <Link to={"/newproduct"}>
              <button>Add Product!</button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
