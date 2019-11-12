import React from "react";
import { connect } from "react-redux";
import SidebarComponent from "./sidebar.component";
import {
  getCategories,
  filterCategory,
  newCategory,
  deleteCategory
} from "../store/actions/categories";
import {
  fetchProductList,
  fetchFilteredProductList
} from "../store/actions/productList";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategory: ""
    };
    this.FetchProductList = this.FetchProductList.bind(this);
    this.FilterbyCategory = this.FilterbyCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      newCategory: event.target.value
    });
  }

  handleDelete(category) {
    this.props.deleteCategory(category);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.newCategory) {
      this.props.newCategory({ name: this.state.newCategory });
      this.setState({
        newCategory: ""
      });
    }
  }

  componentDidMount() {
    this.props.getCategories();
  }

  FetchProductList() {
    event.preventDefault();
    this.props.fetchProductList();
    this.props.filterCategory("");
  }

  FilterbyCategory(catid) {
    event.preventDefault();
    this.props.fetchFilteredProductList(catid);
    this.props.filterCategory(catid);
  }

  render() {
    return (
      <SidebarComponent
        FetchProductList={this.FetchProductList}
        FilterCategory={this.FilterCategory}
        FilterbyCategory={this.FilterbyCategory}
        categories={this.props.categories}
        user={this.props.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        newCategory={this.state.newCategory}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    categories: state.categories.categories,
    user: state.logged.user
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    fetchProductList: () => dispatch(fetchProductList()),
    filterCategory: category => dispatch(filterCategory(category)),
    fetchFilteredProductList: catid =>
      dispatch(fetchFilteredProductList(catid)),
    newCategory: category => dispatch(newCategory(category)),
    deleteCategory: category => dispatch(deleteCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
