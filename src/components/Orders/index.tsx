import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../utils/api";

export function Orders({}) {
  const [orders, setOrders] = useState<Order[]>([]);

  async function fetchOrders() {
    const { data } = await api.get("/orders");
    setOrders(data);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  function handleCancelOrder(orderId: string) {
    setOrders((prevstate) => prevstate.filter((order) => order._id != orderId));
  }

  return (
    <Container>
      <OrdersBoard
        icon="⏱"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={done}
        onCancelOrder={handleCancelOrder}
      />
    </Container>
  );
}
