import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
import { fetchSingleProductData } from "../store/actions/singleProductData";
import { addToCartDbState } from "../store/actions/cart";
import { addToCartState } from "../store/actions/cart";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddToCart(product) {
    event.preventDefault();
    if (!this.props.user.username) {
      this.props.addToCartState(product);
    } else {
      this.props.addToCartDbState(product);
    }
  }

  handleChange(event) {
    console.log("handle change")
  }

  handleSubmit(event) {
    event.preventDefault();
    connsole.log("handlesubmit")
    /*   if (this.state.newCategory) {
        this.props.newCategory({ name: this.state.newCategory });
        this.setState({
          newCategory: ""
        });
      } */
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
          user={this.props.user}
          handleSubmit={this.props.handleSubmit}
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
