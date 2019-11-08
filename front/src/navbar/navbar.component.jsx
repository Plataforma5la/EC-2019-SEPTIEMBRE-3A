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
      <>
        <Navbar className="navbar">
          <Link to="/">
            <Navbar.Brand id="titulo" onClick={() => props.FetchProductList()}>
              E-Climax
            </Navbar.Brand>
          </Link>

          <Nav className="mr-auto">
            {props.user.username ? (
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
              <h1 className="textoNavbar">Bienvenidx {props.user.username}</h1>
            ) : null}
          </Nav>
          <Form inline onSubmit={props.handleSearch}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={props.handleSearchtextChange}
            />
          </Form>
        </Navbar>
      </>
    </div>
  );
}
