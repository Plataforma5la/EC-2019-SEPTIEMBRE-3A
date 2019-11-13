import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
import {fetchSingleProductData} from "../store/actions/singleProductData";
import { addCategoryToProduct } from "../store/actions/singleProductData"
import { addToCartDbState } from "../store/actions/cart";
import { addToCartState } from "../store/actions/cart";
import { deleteProduct } from "../store/actions/productList";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedCategory: this.props.selectedCategory,
    }
    this.setCategory = this.setCategory.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  handleAddCategory(){
    console.log("soy la accion Y EL SELECTEDCATEGORY ES:", this.state.selectedCategory)
    this.props.addCategoryToProduct(this.state.selectedCategory)//this.props.match.params.productID)
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
          selectedCategory={this.state.selectedCategory}
          submitCategory={this.setCategory}
          product={this.props.product}
          categories={this.props.categories}
          handleAddCategory={this.handleAddCategory}
          handleAddToCart={this.handleAddToCart}
          handleDelete={this.handleDelete}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  product: state.singleProductData.singleProductData,
  user: state.logged.user
});

const mapDispatchToProps = dispatch => ({
  addCategoryToProduct: category => dispatch(addCategoryToProduct(category)),
  fetchSingleProductData: id => dispatch(fetchSingleProductData(id)),
  addToCartDbState: product => dispatch(addToCartDbState(product)),
  addToCartState: product => dispatch(addToCartState(product)),
  deleteProduct: product => dispatch(deleteProduct(product))
});

SingleProductContainer.prototype.setCategory= function (category){
  console.log("CATEGORY EN EL SETCATEGORY",category)
  this.setState({selectedCategory:category})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
