import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
import fetchSingleProductData from "../store/actions/singleProductData";
import { addToCartDbState } from "../store/actions/cart";
import { addToCartState } from "../store/actions/cart";
import { deleteProduct } from "../store/actions/productList";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  handleDelete(product) {
    this.props.deleteProduct(product);
    this.props.history.push("/");
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
          handleDelete={this.handleDelete}
          user={this.props.user}
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
  addToCartState: product => dispatch(addToCartState(product)),
  deleteProduct: product => dispatch(deleteProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
