import closeIcon from "../../assets/images/close-icon.svg";
import { ModalBody, Overlary } from "./styles";

interface Props {
  visible: Boolean;
}

export function OrderModal({ visible }: Props) {
  if (!visible) {
    return null;
  }
  return (
    <Overlary>
      <ModalBody>
        <header>
          <strong>MESA 2</strong>
          <button type="button">
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
      </ModalBody>
    </Overlary>
  );
}
