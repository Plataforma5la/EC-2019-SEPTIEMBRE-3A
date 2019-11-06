import React, { Component } from 'react'
import NavBar from './navbar.component'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export class navbarContainer extends Component {
    constructor(props) {
        super(props)
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    handleLogOut() {
        this.props.logOutUser();
        this.props.history.push("/");
    }
    render() {
        let greet;
        let boton;
        if (this.props.user) {
            greet = "Bienvenido " + this.props.user.username
            boton = <Button onclick={this.handleLogOut} color="inherit">Logout</Button>
        } else {
            greet = <Link className="thumbnail" to={`/login`}><Button color="inherit">Login</Button></Link>
        }
        return (
            <div>
                <NavBar greeting={greet} boton={boton} />
            </div>
        )
    }
}

export default navbarContainer
