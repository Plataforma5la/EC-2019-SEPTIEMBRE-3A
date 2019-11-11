import React from "react";
import { connect } from "react-redux";
import CartComponent from "./cart.component";
import {
  emptyCart,
  deleteCart,
  deleteProduct,
  addToCartState,
  addToCartDbState,
  fetchCart,
  refetchCart
} from "../store/actions/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }

  componentDidUpdate() {
    console.log("SE UPDATEEO");
    if (!this.props.user.username) {
      this.props.refetchCart(this.props.cart);
    } else {
      this.props.fetchCart(product);
    }
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
      this.props.refetchCart(this.props.cart);
    } else {
      this.props.addToCartDbState(product);
      this.props.fetchCart(product);
    }
  }

  handleEmptyCart(cart) {
    //si hay user logeado borra el cart de la db, sino del state
    event.preventDefault();
    !this.props.user.username
      ? this.props.emptyCart()
      : this.props.deleteCart(cart);
  }

  handleDeleteProduct(product) {
    event.preventDefault();
    this.props.deleteProduct(product);
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  render() {
    return (
      <div className="container">
        <CartComponent
          cart={this.props.cart}
          handleEmptyCart={this.handleEmptyCart}
          handleDeleteProduct={this.handleDeleteProduct}
          handleAddToCart={this.handleAddToCart}
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
  deleteCart: cart => dispatch(deleteCart(cart)),
  fetchCart: () => dispatch(fetchCart()),
  refetchCart: cart => dispatch(refetchCart(cart)),
  emptyCart: () => dispatch(emptyCart()),
  addToCartState: product => dispatch(addToCartState(product)),
  addToCartDbState: product => dispatch(addToCartDbState(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
