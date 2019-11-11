import React from "react";
import { connect } from "react-redux";
import CartComponent from "./cart.component";
import {emptyCart, deleteCart, deleteProduct} from "../store/actions/cart"

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.handleEmptyCart = this.handleEmptyCart.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    }
    

    handleEmptyCart(cart) {   //si hay user logeado borra el cart de la db, sino del state
        event.preventDefault();
     !this.props.user.username ?
            this.props.emptyCart()
          :
            this.props.deleteCart(cart) 
        }
    
    handleDeleteProduct(product){
         event.preventDefault();
         this.props.deleteProduct(product)
    }

  render() {
    return (
      <div className="container">
        <CartComponent 
        cart={this.props.cart}
        handleEmptyCart={this.handleEmptyCart}
        handleDeleteProduct={this.handleDeleteProduct} 
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart.cart,
  user: state.logged.user
});

const mapDispatchToProps = dispatch => ({
    deleteProduct: product => dispatch(deleteProduct(product)),
    deleteCart: cart => dispatch(deleteCart(cart)),
    emptyCart: () => dispatch(emptyCart()),
  });


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);