import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./productList.component";
import fetchProductList from "../store/actions/productList";

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProductList();
  }

  render() {
    return (
      <div>
        <ProductList products={this.props.productList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: state.products.productList
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProductList: () => dispatch(fetchProductList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
