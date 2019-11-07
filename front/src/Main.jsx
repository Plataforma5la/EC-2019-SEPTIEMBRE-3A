import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterContainer from "./register/register.container";
import LoginContainer from "./login/login.container";
import { fetchUser } from "./store/actions/user";
import { connect } from "react-redux";
import SingleProductContainer from "./SingleProduct/singleProduct.container"
import ProductListContainer from "./productList/productList.container";
import FilteredProductListContainer from "./productList/filteredproductList.container";
import NavBar from "./navbar/navbar.container";

import Sidebar from "./sidebar/sidebar.container";

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
        <NavBar user={this.props.user} history={this.props.history} />
        <Sidebar />
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
          <Route
            exact
            path="/product/:productID"
            render={() => <SingleProductContainer history={this.props.history} />}
          />
          <Route
            exact
            path="/"
            render={() =>  <ProductListContainer history={this.props.history} />}
          />        
       
        

          <Route
            exact
            path="/filteredproducts/:catId"
            render={({match}) => <FilteredProductListContainer history={this.props.history} catId={match.params.catId} />}
          />
          <Redirect from="/" to="/products" />
        </Switch>
        
      </div>
    );
  }
}
const mapStateToProps = ({ logged }) => ({
  user: logged.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  logOutUser: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
