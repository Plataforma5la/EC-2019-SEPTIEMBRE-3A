import React from "react";
import axios from "axios";
import LoginForm from "./login.component";
import { fetchUser } from "../store/actions/user";
import { connect } from "react-redux";
class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      passInput: ""
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
      axios
        .post("http://localhost:3000/api/users/login", {
          username: this.state.userInput,
          password: this.state.passInput
        })
        .then(user => {
          this.props.fetchUser();

          this.props.history.push("/");
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <LoginForm
        setUsername={this.handleUserInput}
        setPassword={this.handlePassInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
