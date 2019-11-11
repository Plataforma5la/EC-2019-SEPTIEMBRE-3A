import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterContainer from "./register/register.container";
import LoginContainer from "./login/login.container";
import { fetchUser } from "./store/actions/user";
import { connect } from "react-redux";
import SingleProductContainer from "./SingleProduct/singleProduct.container";
import ProductListContainer from "./productList/productList.container";
import CartContainer from "./cart/cart.container"
import NavBar from "./navbar/navbar.container";
import "../../back/public/style.css";
import Sidebar from "./sidebar/sidebar.container";
import { fetchProductList } from "./store/actions/productList";
import { fetchCart, fetchCartFromLocalStorage } from "./store/actions/cart";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser().then(() => {
      if (this.props.user.username) {
        this.props.fetchCart();
      } else {
        console.log("@@@@ACA SIN LOGUEAR")
        this.props.fetchCartFromLocalStorage()
      }
    });
    this.props.fetchProductList();
  }

  render() {
    return (
      <div>
        <NavBar user={this.props.user} history={this.props.history} />
        <Sidebar />
        <Switch>
          <Route
            exact
            path={"/product/:productID"}
            component={SingleProductContainer}
          />
          <Route
            exact
            path="/"
            render={() => <ProductListContainer history={this.props.history} />}
          />
          <Route 
            exact
            path={"/cart"}
            render={() => <CartContainer history={this.props.history} />}
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
  logOutUser: () => dispatch(logOutUser()),
  fetchProductList: () => dispatch(fetchProductList()),
  fetchCart: () => dispatch(fetchCart()),
  fetchCartFromLocalStorage: () => dispatch(fetchCartFromLocalStorage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
