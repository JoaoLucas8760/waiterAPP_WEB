import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders({}) {
  const orders: Order[] = [
    {
      _id: "643612f4544f1449995e7767",
      table: "123",
      status: "IN_PRODUCTION",
      products: [
        {
          product: {
            name: "Pizza quatro queijos",
            imagePath: "1681256813338-quatro-queijos.png",
            price: 40,
          },
          quantity: 3,
          _id: "643612f4544f1449995e7768",
        },
        {
          product: {
            name: "Coca cola",
            imagePath: "1681264425579-coca-cola.png",
            price: 5,
          },
          quantity: 5,
          _id: "643612f4544f1449995e7769",
        },
      ],
    },
  ];
  return (
    <Container>
      {}
      <OrdersBoard icon="⏱" status="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" status="Em preparação" />
      <OrdersBoard icon="✅" status="Pronto" />
    </Container>
  );
}
