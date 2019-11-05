import React from "react";
import axios from "axios";
import RegisterForm from "../login/login.component";

export class RegisterContainer extends React.Component {
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

  //editar axios para que salga desde los actions y que incluya el email
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userInput && this.state.passInput) {
      axios.post("/api/users/register", {
        username: this.state.userInput,
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
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
