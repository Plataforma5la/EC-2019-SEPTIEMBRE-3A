import React from "react";
import { connect } from "react-redux";
import OrderComponent from "./orders.component";
import {
  fetchOrders,
  acceptOrder,
  cancelOrder,
  filterOrders
} from "../store/actions/orders";

class OrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
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
          orders={this.props.orders}
          acceptOrder={this.props.acceptOrder}
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
  orders: state.orders.orders
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  acceptOrder: id => dispatch(acceptOrder(id)),
  cancelOrder: id => dispatch(cancelOrder(id)),
  filterOrders: status => dispatch(filterOrders(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
