import React, { Component } from 'react'
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert'
import ConfirmarCompraForm from './confirmarCompra.component'
import { sendMail } from "../store/actions/mailer";

class confirmarCompra extends Component {
    constructor(props) {
        super(props);
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
        this.props.sendMail(this.state.userInput, this.props.cart)
        this.props.history.push('/');
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

const mapStateToProps = ({ logged, cart }) => ({
    user: logged.user,
    cart: cart.cart
});

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser()),
    sendMail: (direccion, cart) => dispatch(sendMail(direccion, cart))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(confirmarCompra);