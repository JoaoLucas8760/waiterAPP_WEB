import React, { useState } from "react";
import { Board, OrdersContainer } from "./styles";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";

type Props = {
  icon: String;
  title: String;
  orders: Order[];
};

export function OrdersBoard({ icon, title, orders }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSlectedOrder] = useState<null | Order>(null);
  function handleOpenModal(order: Order) {
    setSlectedOrder(order);
    setIsModalVisible(true);
  }
  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        handleCloseModal={handleCloseModal}
        order={selectedOrder}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders?.map((order) => {
            return (
              <button
                type="button"
                key={order._id}
                onClick={() => handleOpenModal(order)}
              >
                <strong>Mesa {order.table}</strong>
                <span>{order?.products.length} itens</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </Board>
  );
}
