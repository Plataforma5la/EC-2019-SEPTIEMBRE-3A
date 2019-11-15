import React from "react";
import { Link } from "react-router-dom";
import { newCategory } from "../store/actions/categories";
import { GoTrashcan } from "react-icons/go";

export default function({
  categories,
  FetchProductList,
  FilterbyCategory,
  user,
  handleSubmit,
  handleChange,
  newCategory,
  handleDelete
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
              <div key={category.id} style={{marginLeft:0}} className="row">
                <li
                  className="playlist-item menu-item"
                  onClick={() => FilterbyCategory(category.id)}
                >
                  <Link to={`/`}>
                    <button type="button" className="btn btn-secondary">
                      {category.name}
                    </button>
                  </Link>
                </li>
                {user.isAdmin && (
                  <button
                    onClick={e => handleDelete(category)}
                    type="button"
                    className="btn trashSidebar btn-secondary"
                  >
                    <GoTrashcan />
                  </button>
                )}
              </div>
            );
          })}
        </ul>
        {user.isAdmin && (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Agregar categoría"
                value={newCategory}
                onChange={e => handleChange(e)}
              />
            </form>
            <Link to={"/newproduct"}>
              <button type="button" className="navButton btn btn-drk btn-sm">
                Agregar roducto
              </button>
            </Link>
            <Link to={"/editcategory"}>
              <button type="button" className="navButton btn btn-drk btn-sm">
                Editar categoría
              </button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
