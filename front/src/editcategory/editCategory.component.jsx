import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function EditCategoryComponent({ categories, handleChange, handleSubmit }) {
  return (
    <div className="editCategoryNames">
      <h3>Edit category names</h3>

      <Table striped bordered hover>
        <thead className="columCategoryEditTable">
          <tr>
            <th>Actual category name</th>
            <th>New category name</th>
            <th>Edit category name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat.id}>
              <td className="categoriesNameColor">{cat.name}</td>
              <td>
                {" "}
                <input
                  placeholder="New category name"
                  name="name"
                  type="text"
                  onChange={e => handleChange(e)}
                ></input>
              </td>
              <td>
                {" "}
                <Link to={"/"}>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={event => {
                      event.id = cat.id;
                      handleSubmit(event);
                    }}
                  >
                    Edit category name
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EditCategoryComponent;

{
  /* <div>
          <h3>Edit category names</h3>

<Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Actual category name</th>
            <th>New category name</th>
            <th>Change category name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat=> (
            <tr key={cat.id}></tr>
            <td>{cat.name}</td>
                <td> <input
              placeholder="change category name"
              name="name"
              type="text"
              onChange={e => handleChange(e)}
            ></input></td>
            <td> <Link to={"/"}>
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
            </Link></td>
            </tr>
          ))}
        </tbody>
        </div> */
}

{
  /* <div className="categoryList">
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
    </div> */
}
