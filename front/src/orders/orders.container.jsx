import React from "react";
import { connect } from "react-redux";
import OrderComponent from "./orders.component";
import {
  fetchOrders,
  acceptOrder,
  cancelOrder,
  filterOrders
} from "../store/actions/orders";
import { sendMailAccept, sendMailCancel } from "../store/actions/mailer";

class OrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: "open",
      unAuthorized: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(order) {
    this.props.sendMailCancel(order.buyer.email);
    this.props.cancelOrder(order.id);
  }

  handleAccept(order) {
    this.props.sendMailAccept(order.buyer.email);
    this.props.acceptOrder(order.id);
  }

  componentDidMount() {
    if (this.props.user.isAdmin) {
      this.setState({
        unAuthorized: false
      });
    } else {
      this.setState({
        unAuthorized: true
      });
    }
    this.props.fetchOrders();
  }

  handleChange(event) {
    this.setState({
      selectedStatus: event.target.value
    });
  }

  render() {
    return (
      <div>
        <OrderComponent
          unAuthorized={this.state.unAuthorized}
          orders={this.props.orders}
          handleAccept={this.handleAccept}
          handleCancel={this.handleCancel}
          cancelOrder={this.props.cancelOrder}
          handleChange={this.handleChange}
          filterOrders={this.props.filterOrders}
          selectedStatus={this.state.selectedStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  user: state.logged.user
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  acceptOrder: id => dispatch(acceptOrder(id)),
  cancelOrder: id => dispatch(cancelOrder(id)),
  filterOrders: status => dispatch(filterOrders(status)),
  sendMailAccept: email => dispatch(sendMailAccept(email)),
  sendMailCancel: email => dispatch(sendMailCancel(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
