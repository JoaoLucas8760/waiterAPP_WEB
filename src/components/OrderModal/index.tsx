import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { OrderDeails } from "./styles";
import { ModalBody, Overlary } from "./styles";

interface Props {
  visible: Boolean;
  handleCloseModal: () => void;
  order: Order | null;
}

export function OrderModal({ visible, handleCloseModal, order }: Props) {
  if (!visible || !order) {
    return null;
  }
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
            <span>⏱</span>
            <strong>Fila de espera</strong>
          </div>
        </div>

        <OrderDeails>
          <strong>Itens</strong>
        </OrderDeails>
      </ModalBody>
    </Overlary>
  );
}
