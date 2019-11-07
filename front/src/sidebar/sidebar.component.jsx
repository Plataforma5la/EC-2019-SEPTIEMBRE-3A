import React from "react";
import { Link } from "react-router-dom";

export default function({ categories, FetchProductList, FilterbyCategory }) {
  return (
<<<<<<< HEAD
    <div className="sidenav">
      <section>
        <h4 className="text-muted">CATEGORIAS</h4>
        <Link to={`/`} onClick={() => FetchProductList()}>
          VER TODAS
        </Link>
=======

    <div class="sidenav">
      <section>
        <h4 id="categorias">Categorias</h4>
        <Link to={`/`} onClick={() => FetchProductList()} >VER TODAS</Link>
>>>>>>> 691723cbcfc5f0e4dc1e7942b4a4ee0322e234e0
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
