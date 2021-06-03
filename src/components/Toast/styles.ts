import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;

  position: fixed;
  right: 0px;
  bottom: 0px;
  left: 0px;

  background: white;
  border-radius: 3px;

  background-color: var(--toast-bg);
  color: var(--toast-text);

  padding: 25px 12px;
  margin: 30px auto;

  font-weight: 400;
  text-align: center;

  transform: translateY(150%);
  transition: all 0.3s ease 0s;
  animation-fill-mode: both;
  opacity: 0;

  z-index: 5;

  &.toasted {
    transform: translateY(0%);
    opacity: 1;
  }
`;
