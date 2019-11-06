import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
import Navbar from ""


class SingleProductContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Navbar />
      <SingleProduct
        product={this.props.product}
        //reviews={this.props.reviews}
      />
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.selected ,
  reviews: state.product.reviews
});

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(SingleProductContainer);
