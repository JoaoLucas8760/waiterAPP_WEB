import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { Actions, OrderDetails } from "./styles";
import { ModalBody, Overlary } from "./styles";

interface Props {
  visible: Boolean;
  handleCloseModal: () => void;
  order: Order | null;
  onCancelOrder: () => Promise<void>;
  isLoading: boolean;
}

export function OrderModal({
  visible,
  handleCloseModal,
  order,
  onCancelOrder,
  isLoading,
}: Props) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlary>
      <ModalBody>
        <header>
          <strong>MESA {order.table}</strong>
          <button type="button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>
        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "⏱"}
              {order.status === "IN_PRODUCTION" && "👨‍🍳"}
              {order.status === "DONE" && "⏱✅"}
            </span>

            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em produção"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-itens">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  style={{ objectFit: "cover" }}
                  src={`http://localhost:3002/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height={"28.51"}
                />

                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary" disabled={isLoading}>
            <span>👨‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button
            type="button"
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlary>
  );
}
