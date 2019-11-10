import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./productList.component";
import { fetchProductList } from "../store/actions/productList";
import fetchSingleProductData from "../store/actions/singleProductData";
import { addToCartState, addToCartDbState } from "../store/actions/cart";

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    event.preventDefault();
    console.log("@@@>>>", product);
    console.log("@@@", this.props.user);
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  render() {
    return (
      <div>
        <ProductList
          products={this.props.productList}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: state.products.productList,
    category: state.categories.category,
    user: state.logged.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProductList: () => dispatch(fetchProductList()),
  fetchSingleProductData: id => dispatch(fetchSingleProductData(id)),
  addToCartState: product => dispatch(addToCartState(product)),
  addToCartDbState: product => dispatch(addToCartDbState(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
