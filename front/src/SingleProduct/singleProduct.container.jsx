import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
import fetchSingleProductData from "../store/actions/singleProductData";
import { addToCartDbState } from "../store/actions/cart";
import { addToCartState } from "../store/actions/cart";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  componentDidMount() {
    this.props.fetchSingleProductData(this.props.match.params.productID);
  }

  render() {
    return (
      <div>
        <SingleProduct
          product={this.props.product}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.singleProductData.singleProductData,
  user: state.logged.user
});

const mapDispatchToProps = dispatch => ({
  fetchSingleProductData: id => dispatch(fetchSingleProductData(id)),
  addToCartDbState: product => dispatch(addToCartDbState(product)),
  addToCartState: product => dispatch(addToCartState(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
