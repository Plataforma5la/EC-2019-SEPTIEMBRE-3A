import React, { Component } from 'react'
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert'
import ConfirmarCompraForm from './confirmarCompra.component'
import { confirmPurchase } from "../store/actions/cart";
import { sendMail, sendMail2 } from "../store/actions/mailer";

class confirmarCompra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.totalCalculator = this.totalCalculator.bind(this);
    }
    handleUserInput(direccion) {
        this.setState({
            userInput: direccion
        });
    }
    handleSubmit(e, total) {
        e.preventDefault()
        this.props.sendMail(this.state.userInput, this.props.cart)
        this.props.confirmPurchase(total)
        setTimeout(this.props.sendMail2, 5000)
        this.props.history.push('/');
    }

    totalCalculator(){
        let total=0
        this.props.cart.forEach(element => {
          total += element.price*element.cart_product.count
        });
        return total
      }

    render() {
        return (
            <div className="confirmarCompra">
                {this.props.user.username ?
                    (
                        <ConfirmarCompraForm user={this.props.user}
                                            handleUserInput={this.handleUserInput}
                                            handleSubmit={this.handleSubmit}
                                            totalCalculator={this.totalCalculator} />
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
    sendMail: (direccion, cart) => dispatch(sendMail(direccion, cart)),
    confirmPurchase: (total) => dispatch(confirmPurchase(total)),
    sendMail2: () => dispatch(sendMail2())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(confirmarCompra);