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
          <Navbar.Brand>E-Climax</Navbar.Brand>
          <Nav className="mr-auto">
            {props.user.username ? (
              <div id="bienvenido">
                <Button onClick={props.handleLogOut}>Logout</Button>
              </div>
            ) : (
              <div>
                <LoginContainer />
                <RegisterContainer />
              </div>
            )}
            {props.user.username ? (
              <h1>Bienvenidx {props.user.username}</h1>
            ) : null}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button variant="outline-info">Search</Button> */}
          </Form>
        </Navbar>
      </>
    </div>

    /*  <div className="navbar">
             {props.user.username ? (
                 <div>
                     <p>Bienvenidx {props.user.username}</p>
                     <Button onClick={props.handleLogOut}>Logout</Button>
                 </div>
             ) : (
                     <div>
                         <Link to="/login">
                             <Button>login</Button>
                         </Link>
                         <Link to="/register">
                             <Button>register</Button>
                         </Link>
                     </div>
                 )}
         </div> */
  );
}
