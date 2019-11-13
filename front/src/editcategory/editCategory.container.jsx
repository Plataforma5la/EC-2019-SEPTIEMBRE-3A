import React, { Component } from "react";
import EditCategoryComponent from "./editCategory.component";
import { connect } from "react-redux";
import { changeCategoryName } from "../store/actions/categories";

class EditCategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      categoryName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let newCategoryName = { ...this.state, id: event.id };
    this.props.changeCategoryName(newCategoryName);
    this.props.history.push("/");
  }

  render() {
    console.log(this.state.categoryName);
    return (
      <div>
        <EditCategoryComponent
          categories={this.props.categories}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
});
const mapDispatchToProps = dispatch => ({
  changeCategoryName: categoryName => dispatch(changeCategoryName(categoryName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryContainer);
