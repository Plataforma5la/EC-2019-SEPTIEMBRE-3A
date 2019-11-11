import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./productList.component";
import { fetchProductList } from "../store/actions/productList";
import fetchSingleProductData from "../store/actions/singleProductData";
import { addToCartState, addToCartDbState } from "../store/actions/cart";
import ReactPaginate from 'react-paginate'


class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      productsPerPage: 6,
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this)
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  handlePageClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const indexLastProduct = this.state.currentPage * this.state.productsPerPage
    const indexFirstProduct = indexLastProduct - this.state.productsPerPage
    const currentProducts = this.props.productList.slice(indexFirstProduct, indexLastProduct)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(this.props.productList.length / this.state.productsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="numeros"
          key={number}
          id={number}
          onClick={this.handlePageClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="paginaprincipal">
        <ProductList
          products={currentProducts}
          handleAddToCart={this.handleAddToCart}
          renderPageNumbers={renderPageNumbers}
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
