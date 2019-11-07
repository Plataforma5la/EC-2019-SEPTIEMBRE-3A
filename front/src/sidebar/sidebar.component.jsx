import React from 'react';
import { Link } from 'react-router-dom';

export default function ({ categories, FilterCategory }) {

  return (


    <div class="sidenav">
      <section>
        <h4 className="text-muted">Categorias</h4>
        <Link to={`/`}>ver todas</Link>
        <ul className="list-unstyled sidebar-nav">
          {
            categories.map(category => {
              return (
                <li key={category.id} className="playlist-item menu-item" onClick={() => FilterCategory(category.id)}>
                  <Link to={`/filteredproducts/${category.id}`}>{category.name}</Link>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>



  );
}

