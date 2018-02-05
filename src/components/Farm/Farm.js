import React, { Component } from "react";
import { connect } from "react-redux";
import { moveOrderToCustomer } from "../../actions/farmActions";
import Order from "../Order";
import "./Farm.css";

class Farm extends Component {
  moveOrderToCustomer = () => {
    const { farm, moveOrderToCustomer } = this.props;

    if (farm.orders.length) {
      moveOrderToCustomer(farm.orders[0]);
    }
  };

  render() {
    const { orders } = this.props.farm;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={!orders.length} onClick={this.moveOrderToCustomer}>
          Отправить урожай клиенту
        </button>
        <div className="order__list">
          {orders.map(order => <Order key={order.id} order={order} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ farm }) => ({ farm });
const mapDispatchToProps = { moveOrderToCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
