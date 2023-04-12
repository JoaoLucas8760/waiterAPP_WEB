import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders({}) {
  return (
    <Container>
      <OrdersBoard icon="⏱" status="Fila de espera" />
      <OrdersBoard icon="👨‍🍳" status="Em preparação" />
      <OrdersBoard icon="✅" status="Pronto" />
    </Container>
  );
}
