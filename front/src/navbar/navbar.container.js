import React, { Component } from "react";
import NavBar from "./navbar.component";
import Button from "@material-ui/core/Button";
import { logOutUser } from "../store/actions/user";
import { connect } from "react-redux";
import Axios from "axios";

export class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.logOutUser();
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <NavBar user={this.props.user} handleLogOut={this.handleLogOut} />
      </div>
    );
  }
}

const mapStateToProps = ({ logged }) => ({
  user: logged.user
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
