import React from "react";
import { connect } from "react-redux";
import CartComponent from "./cart.component";
import {
  emptyCart,
  deleteCart,
  deleteProduct,
  addToCartState,
  addToCartDbState,
  fetchCount
} from "../store/actions/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
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
  emptyCart: () => dispatch(emptyCart()),
  addToCartState: product => dispatch(addToCartState(product)),
  addToCartDbState: product => dispatch(addToCartDbState(product))
  // fetchCount: count => dispatch(fetchCount(count))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
