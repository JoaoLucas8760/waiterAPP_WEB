import { Overlary } from "./styles";

interface Props {
  visible: Boolean;
}

export function OrderModal({ visible }: Props) {
  if (!visible) {
    return null;
  }
  return (
    <Overlary>
      <h1>OrderModal</h1>
    </Overlary>
  );
}
