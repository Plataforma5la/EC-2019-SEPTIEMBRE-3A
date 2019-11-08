import React from "react";
import { Link } from "react-router-dom";

export default function({ categories, FetchProductList, FilterbyCategory }) {
  return (
    <div class="sidenav">
      <section>
        <h4 id="categorias">Categorias</h4>
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

{
  /* <div>
<nav id="sidebar">
  <div class="sidebar-header">
    <h3>BOOTSTRAP SIDEBAR</h3>
  </div>

  <ul class="list-unstyled components">
    <p>Dummy Heading</p>

    <li>
      <a href="#">About</a>
    </li>

    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Contact Us</a>
    </li>
  </ul>

  <ul class="list-unstyled CTAs">
    <li>
      <a href="#" class="download">
        Download code
      </a>
    </li>
    <li>
      <a href="#" class="article">
        article
      </a>
    </li>
  </ul>
</nav>
</div> */
}
