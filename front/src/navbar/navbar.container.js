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
        let botonLog;
        let botonReg;
        if (this.props.user) {
            greet = "Bienvenido " + this.props.user.username
            botonLog = <Button onclick={this.handleLogOut} color="inherit">Logout</Button>
        } else {
            greet = ""
            botonLog = <Link className="thumbnail" to={`/login`}><Button color="inherit">Login</Button></Link>
            botonReg = <Link className="thumbnail" to={`/register`}><Button color="inherit">Register</Button></Link>
        }
        return (
            <div>
                <NavBar greeting={greet} botonLog={botonLog} botonReg={botonReg} />
            </div>
        )
    }
}

export default navbarContainer
