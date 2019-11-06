import React, { Component } from 'react'
import NavBar from './navbar.component'

export class navbarContainer extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        let greet;
        if (this.props.user) {
            greet = "Bienvenido " + this.props.user.username
        } else {
            greet = ''
        }
        return (
            <div>
                <NavBar greeting={greet} />
            </div>
        )
    }
}

export default navbarContainer
