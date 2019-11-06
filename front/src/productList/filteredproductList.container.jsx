import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./productList.component";
import { fetchFilteredProductList } from "../store/actions/productList";

class FilteredProductListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("@@@Categoria: ", this.props.catId)
    this.props.fetchFilteredProductList(this.props.catId);
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
  fetchFilteredProductList: (catid) => dispatch(fetchFilteredProductList(catid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredProductListContainer);
