import React, { useState } from "react";
import { Board, OrdersContainer } from "./styles";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { api } from "../../utils/api";

type Props = {
  icon: String;
  title: String;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
};

export function OrdersBoard({ icon, title, orders, onCancelOrder }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSlectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setSlectedOrder(order);
    setIsModalVisible(true);
  }
  function handleCloseModal() {
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        handleCloseModal={handleCloseModal}
        order={selectedOrder}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
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
