import React from "react";
import axios from "axios";
import RegisterForm from "../register/register.component";
import { registerUser } from "../store/actions/user";
import { connect } from "react-redux";
import { createCart } from "../store/actions/cart";

class RegisterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      passInput: "",
      mailInput: ""
    };
    this.handlePassInput = this.handlePassInput.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMailInput = this.handleMailInput.bind(this);
  }
  handleUserInput(username) {
    this.setState({
      userInput: username
    });
  }
  handleMailInput(email) {
    this.setState({
      mailInput: email
    });
  }

  handlePassInput(password) {
    this.setState({
      passInput: password
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = this.props.products;
    if (this.state.userInput && this.state.passInput && this.state.mailInput) {
      this.props
        .registerUser({
          username: this.state.userInput,
          email: this.state.mailInput,
          password: this.state.passInput
        })
        .then(() => {
          localStorage.removeItem('CART')
          if (products.length) {
            this.props.createCart(products);
          }
        });
    }
  }
  render() {
    return (
      <RegisterForm
        setUsername={this.handleUserInput}
        setPassword={this.handlePassInput}
        setMail={this.handleMailInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapStateToProps = state => ({
  products: state.cart.cart
});

const mapDispatchToProps = dispatch => ({
  registerUser: ({ username, email, password }) =>
    dispatch(registerUser({ username, email, password })),
  createCart: products => dispatch(createCart(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
