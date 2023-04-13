import React from "react";
import { Board, OrdersContainer } from "./styles";
import { Order } from "../../types/Order";

type Props = {
  icon: String;
  status: String;
  orders: Order[];
};

export function OrdersBoard({ icon, status, orders }: Props) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{status}</strong>
        <span>(1)</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders?.map((order) => {
            return (
              <button type="button" key={order._id}>
                <strong>Mesa 2</strong>
                <span>3 itens</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </Board>
  );
}
