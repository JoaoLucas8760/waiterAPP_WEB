import React from "react";
import { Board, OrdersContainer } from "./styles";

type Props = {
  icon: String;
  status: String;
};

export function OrdersBoard({ icon, status }: Props) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{status}</strong>
        <span>(1)</span>
      </header>
      <OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>3 itens</span>
        </button>

        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
