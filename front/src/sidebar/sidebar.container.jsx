import React from "react";
import { connect } from "react-redux";
import SidebarComponent from "./sidebar.component";
import {
  getCategories,
  filterCategory,
  newCategory
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
  }

  handleChange(event) {
    this.setState({
      newCategory: event.target.value
    });
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
    newCategory: category => dispatch(newCategory(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
