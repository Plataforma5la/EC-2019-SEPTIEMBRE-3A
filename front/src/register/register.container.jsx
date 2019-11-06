import React from "react";
import axios from "axios";
import RegisterForm from "../register/register.component";
import { registerUser } from "../store/actions/user";
import { connect } from "react-redux";

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

  //editar axios para que salga desde los actions y que incluya el email
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userInput && this.state.passInput && this.state.mailInput) {
      this.props.registerUser({
        username: this.state.userInput,
        email: this.state.mailInput,
        password: this.state.passInput
      });
      this.props.history.push("/");
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

const mapDispatchToProps = dispatch => ({
  registerUser: ({ username, email, password }) =>
    dispatch(registerUser({ username, email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(RegisterContainer);
