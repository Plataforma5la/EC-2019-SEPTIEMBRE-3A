import React, { Component } from 'react'
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert'
import ConfirmarCompraForm from './confirmarCompra.component'

class confirmarCompra extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(direccion) {
        this.setState({
            userInput: direccion
        });
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.userInput)
    }
    render() {
        return (
            <div className="confirmarCompra">
                {this.props.user.username ?
                    (
                        <ConfirmarCompraForm user={this.props.user} handleUserInput={this.handleUserInput} handleSubmit={this.handleSubmit} />
                    ) :
                    (
                        <Alert variant="danger"> Por favor inicia sesion para poder confirmar tu compra</Alert>
                    )}
            </div>
        )
    }
}

const mapStateToProps = ({ logged }) => ({
    user: logged.user
});

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(confirmarCompra);