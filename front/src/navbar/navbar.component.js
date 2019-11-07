import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function MenuAppBar(props) {
    return (
        <div className="grid">
            <div className="navbar">
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
            </div>
        </div>

    )

}


