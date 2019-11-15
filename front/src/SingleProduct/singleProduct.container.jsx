import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
import { fetchSingleProductData } from "../store/actions/singleProductData";
import { addCategoryToProduct } from "../store/actions/singleProductData";
import { substractCategoryToProduct } from "../store/actions/singleProductData";
import { addToCartDbState } from "../store/actions/cart";
import { addToCartState } from "../store/actions/cart";
import { deleteProduct } from "../store/actions/productList";
import { getCategories } from "../store/actions/categories";
import Store from "../store/index";

class SingleProductContainer extends React.Component {
  constructor(props) {
    const store = Store.getState();
    super(props);
    this.state = {
      selectedCategory: parseInt(this.props.selectedCategory),
      existingCategories: [-1]
    };
    this.setCategory = this.setCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleSubstractCategory = this.handleSubstractCategory.bind(this);
    this.idsArrayMaker = this.idsArrayMaker.bind(this);
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
    this.props.addCategoryToProduct( {productID: this.props.match.params.productID, categoryID:this.state.selectedCategory })
    .then(()=> this.setState({selectedCategory: this.state.selectedCategory,  existingCategories:  this.idsArrayMaker()}))
  }

  handleSubstractCategory(){
    this.props.substractCategoryToProduct( {productID: this.props.match.params.productID, categoryID:this.state.selectedCategory })
    .then(()=> this.setState({selectedCategory: this.state.selectedCategory,  existingCategories:  this.idsArrayMaker()}))
    //this.setState({selectedCategory:this.state.selectedCategory ,  existingCategories:  this.idsArrayMaker()})
  }
  


  setCategory(category){
    this.setState({selectedCategory:category,  existingCategories:  this.idsArrayMaker()})
  }

  idsArrayMaker(){
    let arr = [];
    this.props.product.categories.map(category => arr.push(category.id));
    return arr;
  }

  handleDelete(product) {
    this.props.deleteProduct(product);
    this.props.history.push("/");
  }

  componentDidMount() {
    this.props.fetchSingleProductData(this.props.match.params.productID)
    .then(()=> 
    this.setState({selectedCategory:this.props.categories[0].id,  existingCategories:  this.idsArrayMaker() 
    }) )
  }

  render() {
    return (
      <div>
        <SingleProduct
          existingCategories={this.state.existingCategories}
          selectedCategory={this.state.selectedCategory}
          submitCategory={this.setCategory}
          product={this.props.product}
          categories={this.props.categories}
          handleAddCategory={this.handleAddCategory}
          handleSubstractCategory={this.handleSubstractCategory}
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
  idsArrayMaker: () => dispatch(idsArrayMaker()),
  getCategories: () => dispatch(getCategories()),
  substractCategoryToProduct: category =>
  dispatch(substractCategoryToProduct(category)),
  addCategoryToProduct: category => dispatch(addCategoryToProduct(category)),
  fetchSingleProductData: id => dispatch(fetchSingleProductData(id)),
  addToCartDbState: product => dispatch(addToCartDbState(product)),
  addToCartState: product => dispatch(addToCartState(product)),
  deleteProduct: product => dispatch(deleteProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
