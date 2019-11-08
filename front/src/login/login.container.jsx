import React from "react";
import LoginForm from "./login.component";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/user";
class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      passInput: "",
      wrongUser: ""
    };
    this.handlePassInput = this.handlePassInput.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserInput(username) {
    this.setState({
      userInput: username
    });
  }
  handlePassInput(password) {
    this.setState({
      passInput: password
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userInput && this.state.passInput) {
      this.props
        .loginUser({
          username: this.state.userInput,
          password: this.state.passInput
        })
        .catch(err =>
          this.setState({ wrongUser: "incorrect username or password" })
        );
    }
  }
  render() {
    return (
      <LoginForm
        setUsername={this.handleUserInput}
        setPassword={this.handlePassInput}
        handleSubmit={this.handleSubmit}
        wrongUser={this.state.wrongUser}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: ({ username, password }) =>
    dispatch(loginUser({ username, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
