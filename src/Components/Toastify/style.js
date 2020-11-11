import styled from "styled-components";

export const StyledToastify = styled.div`
  width: 300px;
  min-height: 44px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  background: white;
  border-radius: 2px;
  left: 0;
  margin: 1.875rem auto;
  right: 0;
  text-align: left;
  padding: 12px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  flex-direction: column;
  transform: translateY(150%);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-fill-mode: both;
  opacity: 0;

  &.toastify__active {
    transform: translateY(0%);
    opacity: 1;
  }

  svg {
    margin-left: auto;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;
