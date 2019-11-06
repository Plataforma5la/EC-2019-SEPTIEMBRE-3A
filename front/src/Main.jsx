import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./register/register.container";
import LoginContainer from "./login/login.container";
import { fetchUser } from "./store/actions/user";
import { connect } from "react-redux";
import NavBar from "./navbar/navbar.container"

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <NavBar user={this.props.user} />
        <Switch>
          <Route
            exact
            path="/register"
            render={() => <RegisterContainer history={this.props.history} />}
          />
          <Route
            exact
            path="/login"
            render={() => <LoginContainer history={this.props.history} />}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ logged }) => ({
  user: logged.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
