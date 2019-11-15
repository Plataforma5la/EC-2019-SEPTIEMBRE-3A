import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import RegisterContainer from "../register/register.container";
import LoginContainer from "../login/login.container";
import FbLogin from "../fbLogin/loginButton.component"

export default function MenuAppBar(props) {
  return (
    <div>
      <Navbar className="navbar">
        <div className="logoContainer">
          <Link to="/">
            <Navbar.Brand id="titulo" onClick={() => props.FetchProductList()}>
              <h2>E-Climax</h2>
            </Navbar.Brand>
          </Link>
        </div>
        {props.user.username ? (
          <div className="col-3">
            <h4 className="textoNavbar">
              BienvenidX.X.X {props.user.username}
            </h4>
            {props.user.isAdmin ? (
              <Link to="orders">
                <button>Ver órdenes</button>
              </Link>
            ) : (
                <Link to="/history">
                  <button>Ver Historial de Compra</button>
                </Link>
              )}
          </div>
        ) : (
            <div className="col-3">
              <span></span>
            </div>
          )}
        <div className="col-3">
          <Form onSubmit={props.handleSearch}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={props.handleSearchtextChange}
            />
          </Form>
          {props.user.isAdmin ? (
            <Link to="/users">
              <button>Ver usuarios</button>
            </Link>
          ) : (
              <Link to="/cart">
                <button>carrito</button>
              </Link>
            )}
        </div>
        {props.user.username ? (
          <div className="col-3 navbarLogoutContainer">
            <button
              className="navButton btn btn-drk btn-sm"
              onClick={props.handleLogOut}
            >
              Logout
            </button>
          </div>
        ) : (
            <div className="col-3 loginRegisterContainer">
              <FbLogin registerUser={props.registerUser} />
              <span> </span>
              <LoginContainer />
              <span> </span>
              <span> </span>
              <RegisterContainer />
            </div>
          )}
      </Navbar>

    </div >
  );
}


