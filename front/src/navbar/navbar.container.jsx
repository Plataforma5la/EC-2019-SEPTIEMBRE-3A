import React, { Component } from "react";
import NavBar from "./navbar.component";
import { logOutUser } from "../store/actions/user";
import { connect } from "react-redux";
import { fetchSearchedProductList } from "../store/actions/productList";
import { fetchProductList } from "../store/actions/productList";
import { emptyCart } from "../store/actions/cart";
import { registerUser } from "../store/actions/user";

export class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSearchtextChange = this.handleSearchtextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.FetchProductList = this.FetchProductList.bind(this);
  }

  FetchProductList() {
    event.preventDefault();
    this.props.fetchProductList();
  }

  handleLogOut() {
    this.props.logOutUser();
    this.props.emptyCart();
    this.props.history.push("/");
  }

  handleSearchtextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    if (!this.state.text || this.state.text.replace(/\s+/g, "") == "") return;
    this.props.fetchSearchedProductList(this.state.text);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <NavBar
          user={this.props.user}
          handleLogOut={this.handleLogOut}
          handleSearchtextChange={this.handleSearchtextChange}
          handleSearch={this.handleSearch}
          FetchProductList={this.FetchProductList}
          registerUser={this.props.registerUser}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ logged }) => ({
  user: logged.user
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser()),
  fetchSearchedProductList: text => dispatch(fetchSearchedProductList(text)),
  fetchProductList: () => dispatch(fetchProductList()),
  emptyCart: () => dispatch(emptyCart()),
  registerUser: ({ username, email, password }) =>
    dispatch(registerUser({ username, email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
