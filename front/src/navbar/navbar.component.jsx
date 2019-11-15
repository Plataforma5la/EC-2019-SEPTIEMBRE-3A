import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import RegisterContainer from "../register/register.container";
import LoginContainer from "../login/login.container";
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
            {props.user.isAdmin ? (
              <h4 className="textoNavbarAdmin">
                Hello Master {props.user.username}
              </h4>
            ) : (
              <h4 className="textoNavbar">
                Bienvenidx.x.x {props.user.username}
              </h4>
            )}
            {props.user.isAdmin ? (
              <Link to="orders">
                <button className="adminButton">Ver órdenes</button>
              </Link>
            ) : (
              <Link to="/history">
                <button className="navButton">Ver Historial de Compra</button>
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
              <button className=" adminButton verUsuarios">Ver usuarios</button>
            </Link>
          ) : (
            <Link to="/cart">
              <button className="navButton verCarrito">carrito</button>
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
            <LoginContainer />
            <span> </span>
            <span> </span>
            <RegisterContainer />
          </div>
        )}
      </Navbar>
    </div>
  );
}

{
  /* {props.user.username ? (
                  <div id="bienvenido" className="textoNavbar">
                    <Button className="navButton" onClick={props.handleLogOut}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div>
                    <LoginContainer />
                    <span> </span>
                    <RegisterContainer />
                  </div>
                )}
                {props.user.username ? (
                  <h1 className="textoNavbar">
                    BienvenidX.X.X {props.user.username}
                  </h1>
                ) : null} */
}
