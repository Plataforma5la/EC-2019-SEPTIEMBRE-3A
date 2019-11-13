import React from "react";
import { connect } from "react-redux";
import OrderComponent from "./singleOrder.component";
import { fetchOrder } from "../store/actions/orders";

class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOrder(this.props.match.params.orderId);
  }

  render() {
    return (
      <div>
        <OrderComponent order={this.props.order} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.orders.order
});

const mapDispatchToProps = dispatch => ({
  fetchOrder: id => dispatch(fetchOrder(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
