import React from "react";
import { connect } from "react-redux";
import SidebarComponent from "./sidebar.component";
import { getCategories, filterCategory } from "../store/actions/categories";
import { fetchProductList, fetchFilteredProductList } from "../store/actions/productList";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.UsernamechangeHandler = this.UsernamechangeHandler.bind(this)
    // this.PasswordchangeHandler = this.PasswordchangeHandler.bind(this)
    // this.SubmitLogin = this.SubmitLogin.bind(this)
    this.FetchProductList = this.FetchProductList.bind(this)
    this.FilterbyCategory = this.FilterbyCategory.bind(this)
  }

  componentDidMount() {
    this.props.getCategories();
  }

  FetchProductList(){
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
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    categories: state.categories.categories
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    fetchProductList: () => dispatch(fetchProductList()),
    filterCategory: category => dispatch(filterCategory(category)),
    fetchFilteredProductList: (catid) => dispatch(fetchFilteredProductList(catid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
