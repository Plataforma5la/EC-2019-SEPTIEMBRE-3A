import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterContainer from "./register/register.container";
import LoginContainer from "./login/login.container";
import { fetchUser } from "./store/actions/user";
import { connect } from "react-redux";
import SingleProductContainer from "./SingleProduct/singleProduct.container";
import ProductListContainer from "./productList/productList.container";
import NavBar from "./navbar/navbar.container";
import "../../back/public/style.css";
import Sidebar from "./sidebar/sidebar.container";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(this.props);
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
