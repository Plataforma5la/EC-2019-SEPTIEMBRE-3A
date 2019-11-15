import React from "react";
import { connect } from "react-redux";
import UsersComponent from "./users.component";
import {
  fetchUsers,
  setUserAsAdmin,
  deleteUser,
  removeAdmin
} from "../store/actions/users";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unAuthorized: true
    };
    this.handleEditUserAdmin = this.handleEditUserAdmin.bind(this);
    this.handleRemoveUserAdmin = this.handleRemoveUserAdmin.bind(this);

    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    if (this.props.user.isAdmin) {
      this.setState({
        unAuthorized: false
      });
    } else {
      this.setState({
        unAuthorized: true
      });
    }

    this.props.fetchUsers();
  }

  handleEditUserAdmin(user, trueorfalse) {
    event.preventDefault();
    this.props.setUserAsAdmin(user);
  }

  handleRemoveUserAdmin(user, trueorfalse) {
    event.preventDefault();
    this.props.removeAdmin(user);
  }

  handleDeleteUser(user) {
    event.preventDefault();
    this.props.deleteUser(user);
  }

  render() {
    return (
      <div className="container">
        <UsersComponent
          unAuthorized={this.state.unAuthorized}
          users={this.props.users}
          setUserAsAdmin={this.handleEditUserAdmin}
          deleteUser={this.handleDeleteUser}
          removeAdmin={this.handleRemoveUserAdmin}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users,
  user: state.logged.user
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  setUserAsAdmin: user => dispatch(setUserAsAdmin(user)),
  deleteUser: user => dispatch(deleteUser(user)),
  removeAdmin: user => dispatch(removeAdmin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
