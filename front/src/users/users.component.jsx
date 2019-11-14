import React from "react";
import { Link } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { Table } from "react-bootstrap";

export default function({ users, setUserAsAdmin, deleteUser, unAuthorized }) {
  return (
    <div className="container cartProductsContainer">
      {unAuthorized ? (
        <h3>No podés pasar acá chanchuni</h3>
      ) : (
        <h3>Ver Usuarios</h3>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>
                {!user.isAdmin ? (
                  <button
                    onClick={() => setUserAsAdmin(user)}
                    className="btn btn-secondary"
                  >
                    <MdCheckBoxOutlineBlank />
                  </button>
                ) : (
                  <button className="btn btn-secondary">
                    <IoMdCheckboxOutline />
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => deleteUser(user)}
                >
                  <GoTrashcan />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      ;
    </div>
  );
}
