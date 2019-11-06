import React from 'react';
import { connect } from 'react-redux';
import SidebarComponent from './sidebar.component'
import { getCategories, filterCategory } from '../store/actions/productList';


class Sidebar extends React.Component {
constructor(props){
    super(props)
    this.state ={}
    // this.UsernamechangeHandler = this.UsernamechangeHandler.bind(this)
    // this.PasswordchangeHandler = this.PasswordchangeHandler.bind(this)
    // this.SubmitLogin = this.SubmitLogin.bind(this)
    // this.SubmitLogout = this.SubmitLogout.bind(this)
}

componentDidMount() {
    this.props.getCategories()
}


FilterCategory(e){
    event.preventDefault();
    console.log("@@@", this.state['category'])
    this.props.filterCategory(e.target.value)
}


    render(){
        return <SidebarComponent    FilterCategory = {this.FilterCategory}
                                    categories = { this.props.categories }
                                />
    }

}

const mapStateToProps = function(state) {
    return {
        categories: state.list.categories,
        category: state.list.category
    }
  }
  
  const mapDispatchToProps = function (dispatch) {
    return {
        getCategories: () => dispatch(getCategories()),
        filterCategory: (category) => dispatch(filterCategory(category))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
