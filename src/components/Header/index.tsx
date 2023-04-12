import logo from "../../assets/images/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>pedidos</h1>
          <h2>acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt="WAITERAPP" />
      </Content>
    </Container>
  );
}
