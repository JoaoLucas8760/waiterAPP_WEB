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

export const OrderDetails = styled.div`
  margin-top: 1.5rem;

  > strong {
    font-weight: 500;
    font-size: 0.87rem;
    opacity: 0.8;
  }
  .order-itens {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }
      .quantity {
        font-size: 0.87rem;
        color: #666;
        display: block;
        min-width: 1.25rem;
        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;
        strong {
          display: block;
          margin-bottom: 0.25rem;
        }
        span {
          font-size: 0.87rem;
          color: #666;
        }
      }
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.87rem;
    span {
      font-weight: 500;
      font-size: 0.87rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  .primary {
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #fff;
    border-radius: 3rem;
    border: 0;
    padding: 0.75rem 1.5rem;
  }

  .secondary {
    padding: 0.87rem 1.5rem;
    color: #d73035;
    font-weight: bold;
    border: 0;
    background: 0;
    margin-top: 0.75rem;
  }
`;
