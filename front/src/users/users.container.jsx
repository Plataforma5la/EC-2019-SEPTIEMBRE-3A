import React from "react";
import { connect } from "react-redux";
import UsersComponent from "./users.component";
import { fetchUsers, setUserAsAdmin, deleteUser } from "../store/actions/users";

class Users extends React.Component {
  constructor(props) {
    super(props);
    // this.state = Store.getState()
    this.handleEditUserAdmin = this.handleEditUserAdmin.bind(this);
    // this.handleEmptyCart = this.handleEmptyCart.bind(this);
    // this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleEditUserAdmin(user, trueorfalse) {
    event.preventDefault();
    this.props.setUserAsAdmin(user);
  }

  handleDeleteUser(user) {
    event.preventDefault();
    // console.log(user);
    this.props.deleteUser(user);
  }

  render() {
    return (
      <div className="container">
        <UsersComponent
          users={this.props.users}
          setUserAsAdmin={this.handleEditUserAdmin}
          deleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  setUserAsAdmin: user => dispatch(setUserAsAdmin(user)),
  deleteUser: user => dispatch(deleteUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
