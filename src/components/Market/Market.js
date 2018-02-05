import React, { Component } from "react";
import { connect } from "react-redux";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";
import Order from "../Order";
import "./Market.css";

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  createOrder = () => {
    this.props.createOrder(getNewOrder());
  };

  moveOrderToFarm = () => {
    const { market, moveOrderToFarm } = this.props;

    if (market.orders.length) {
      moveOrderToFarm(market.orders[0]);
    }
  };

  render() {
    const { orders } = this.props.market;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.createOrder}
        >
          Создать заказ
        </button>
        <button disabled={!orders.length} onClick={this.moveOrderToFarm}>
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(order => <Order key={order.id} order={order} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ market }) => ({ market });

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
