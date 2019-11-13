import React from "react";
import ReviewComponent from "./review.component";
import { connect } from "react-redux";
import { postReview } from "../store/actions/review";

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
      content: '',
      productId: this.props.productId
    };
    this.handleScoreInput = this.handleScoreInput.bind(this);
    this.handleContentInput = this.handleContentInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleScoreInput(score) {
    this.setState({
      score: score
    });
  }
  handleContentInput(content) {
    this.setState({
        content: content
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.score == "") {alert("Mové el fueguito para seleccionar un puntaje!"); return}
    this.props.postReview(this.state)
  }

  render() {
    return (
      <ReviewComponent
        setScore={this.handleScoreInput}
        setContent={this.handleContentInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
//const mapStateToProps = state => ({
 // products: state.cart.cart
//});

const mapDispatchToProps = dispatch => ({
    postReview: (review) => dispatch(postReview(review))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewContainer);
