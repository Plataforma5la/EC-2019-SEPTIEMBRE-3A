import React from "react";
import SingleProduct from "./singleProduct.component";
import { connect } from "react-redux";
import fetchSingleProductData from "../store/actions/singleProductData";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("CCCOOCOCOCOCO");
    this.props.fetchSingleProductData(this.props.match.params.productID);
  }

  render() {
    console.log(this.props, "BBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
    return (
      <div>
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

const mapDispatchToProps = dispatch => ({
  fetchSingleProductData: id => dispatch(fetchSingleProductData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
