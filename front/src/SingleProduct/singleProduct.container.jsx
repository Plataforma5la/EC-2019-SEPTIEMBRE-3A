import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
//import Navbar from "./navbar/navbar.container";

class SingleProductContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <SingleProduct
          product={this.props.product}
          //reviews={this.props.reviews}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.singleProductData.singleProductData,
  reviews: state.reviews
});

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(SingleProductContainer);
