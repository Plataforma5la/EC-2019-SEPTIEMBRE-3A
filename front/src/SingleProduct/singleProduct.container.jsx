import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";

class SingleProductContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SingleProduct
          product={this.props.product}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.singleProductData.singleProductData,
});

export default connect(mapStateToProps)(SingleProductContainer);
