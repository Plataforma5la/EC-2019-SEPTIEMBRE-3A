import React from "react";
import axios from "axios";
import LoginForm from "../components/RegisterLogin";
import { fetchUser } from "../store/actions/user";
import { connect } from "react-redux";
import { fetchFavs } from "../store/actions/favs";
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
          this.props.fetchUser().then(() => this.props.fetchFavs(user));

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
  fetchUser: () => dispatch(fetchUser()),
  fetchFavs: user => dispatch(fetchFavs(user))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
