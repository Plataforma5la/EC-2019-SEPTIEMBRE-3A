import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./productList.component";
import { fetchProductList } from "../store/actions/productList";
import fetchSingleProductData from "../store/actions/singleProductData";

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <ProductList products={this.props.productList} />
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: state.products.productList,
    category: state.categories.category
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProductList: () => dispatch(fetchProductList())
  // fetchSingleProductData: id => dispatch(fetchSingleProductData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
