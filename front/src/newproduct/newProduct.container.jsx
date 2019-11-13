import React from "react";
import { createProduct } from "../store/actions/productList";
import NewProduct from "./newProduct.component";
import { connect } from "react-redux";

class NewProductContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      price: "",
      stock: "",
      img1Url: "",
      img2Url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createProduct({
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      stock: this.state.stock,
      img1Url: this.state.img1Url,
      img2Url: this.state.img2Url
    });
  }

  render() {
    return (
      <NewProduct
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}

      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProduct: product => dispatch(createProduct(product))
});

export default connect(
  null,
  mapDispatchToProps
)(NewProductContainer);
