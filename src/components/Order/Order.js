import React, { PureComponent } from "react";
import "./Order.css";

class Order extends PureComponent {
  render() {
    const { name, price, createdAt } = this.props.order;

    return (
      <div className="order">
        <div className="order__upper">
          <p className="p--order">Название: {name}</p>
          <p className="p--order">
            Цена:
            <span className="order-price">{price}</span>
          </p>
        </div>
        <div className="order__lower">
          <p className="p--order">Создан: {createdAt.toString()}</p>
        </div>
      </div>
    );
  }
}

export default Order;
