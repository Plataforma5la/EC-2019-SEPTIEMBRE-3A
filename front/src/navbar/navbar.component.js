import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"


export default function MenuAppBar(props) {
    return (

        <div>

            <>
                <Navbar className="navbar">
                    <Link to="/"><Navbar.Brand>E-Climax</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        {props.user.username ? (
                            <div id="bienvenido">
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
                        {props.user.username ? <h1>Bienvenidx {props.user.username}</h1> : null}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        {/* <Button variant="outline-info">Search</Button> */}
                    </Form>
                </Navbar>
            </>
        </div>


    )

}


