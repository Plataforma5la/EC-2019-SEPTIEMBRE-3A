import React from "react";
import { Link } from "react-router-dom";

export default function({ categories, FetchProductList, FilterbyCategory }) {
  return (
    <div className="sidenav">
      <section>
        <h4 className="text-muted">CATEGORIAS</h4>
        <Link to={`/`} onClick={() => FetchProductList()}>
          VER TODAS
        </Link>
        <ul className="list-unstyled">
          {categories.map(category => {
            return (
              <li
                key={category.id}
                className="playlist-item menu-item"
                onClick={() => FilterbyCategory(category.id)}
              >
                <Link to={`/`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
