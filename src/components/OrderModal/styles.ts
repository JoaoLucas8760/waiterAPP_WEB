import { Container } from "./../Header/styles";
import styled from "styled-components";

export const Overlary = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      border: 0;
      background: transparent;
      srong {
        font-size: 1.5rem;
      }
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.87rem;
      opacity: 0.8;
    }

    div {
      display: flex;
      margin-top: 0.5rem;
      gap: 0.5rem;
      align-items: center;
    }
  }
`;

export const OrderDeails = styled.div`
  margin-top: 1.5rem;

  > strong {
    font-weight: 500;
    font-size: 0.87rem;
    opacity: 0.8;
  }
`;
