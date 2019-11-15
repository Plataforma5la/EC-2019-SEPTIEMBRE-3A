import React from "react";
import { connect } from "react-redux";
import  HistoryComponent  from "./historial.component";
import { fetchHistory } from "../store/actions/cart";

class HistoryContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    return (
      <div>
        <HistoryComponent
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.cart.history
});

const mapDispatchToProps = dispatch => ({
  fetchHistory: () => dispatch(fetchHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryContainer);