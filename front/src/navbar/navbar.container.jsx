import React, { Component } from "react";
import NavBar from "./navbar.component";
import Button from "@material-ui/core/Button";
import { logOutUser } from "../store/actions/user";
import { connect } from "react-redux";
import Axios from "axios";
import { fetchSearchedProductList } from "../store/actions/productList";

export class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSearchtextChange = this.handleSearchtextChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleLogOut() {
    this.props.logOutUser();
    this.props.history.push("/");
  }

  handleSearchtextChange(event){
    this.setState({text: event.target.value})
  }

  handleSearch(event) {
    console.log(this.state.text)
    event.preventDefault();
    this.props.fetchSearchedProductList(this.state.text)
  }

  render() {
    return (
      <div>
        <NavBar user={this.props.user}  handleLogOut={this.handleLogOut}
                                        handleSearchtextChange={this.handleSearchtextChange}
                                        handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

const mapStateToProps = ({ logged }) => ({
  user: logged.user
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser()),
  fetchSearchedProductList: (text) => dispatch(fetchSearchedProductList(text))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
