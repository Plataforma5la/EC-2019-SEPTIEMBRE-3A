import React from "react";
import { connect } from "react-redux";
import CartComponent from "./cart.component";
import Store from "../store/index";
import {
  emptyCart,
  deleteProduct,
  addToCartState,
  addToCartDbState,
  substractOfCartState,
  substractOfCartDbState,
  fetchCart
} from "../store/actions/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleSubstractOfCart = this.handleSubstractOfCart.bind(this);
    this.totalCalculator = this.totalCalculator.bind(this);
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  handleSubstractOfCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.substractOfCartState(product);
    } else {
      this.props.substractOfCartDbState(product);
    }
  }


  totalCalculator(){
    let total=0
    this.props.cart.forEach(element => {
      total += element.price*element.cart_product.count
    });
    return total
  }

  render() {
    return (
      <div className="container">
        <CartComponent
          cart={this.props.cart}
          handleDeleteProduct={this.handleDeleteProduct}
          handleAddToCart={this.handleAddToCart}
          handleSubstractOfCart={this.handleSubstractOfCart}
          totalCalculator={this.totalCalculator}

        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  user: state.logged.user
});

const mapDispatchToProps = dispatch => ({
  deleteProduct: product => dispatch(deleteProduct(product)),
  fetchCart: () => dispatch(fetchCart()),
  emptyCart: () => dispatch(emptyCart()),
  addToCartState: product => dispatch(addToCartState(product)),
  addToCartDbState: product => dispatch(addToCartDbState(product)),
  substractOfCartState: product => dispatch(substractOfCartState(product)),
  substractOfCartDbState: product => dispatch(substractOfCartDbState(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
