import React from "react";
import { Link } from "react-router-dom";

export default function({ categories, FetchProductList, FilterbyCategory }) {
  return (
    <div className="sidenav">
      <section>
        <h4 id="categorias">Categorias</h4>
        <Link to={`/`} onClick={() => FetchProductList()}><button  type="button" className="btn btn-secondary">
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
                <Link to={`/`}><button  type="button" className="btn btn-secondary">{category.name}</button></Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
