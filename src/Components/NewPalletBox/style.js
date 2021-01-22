import styled, { keyframes } from "styled-components";

const item = keyframes`
  from {
    opacity: 0
    transform: translateY(0.625rem);
  } to {
    opacity: 1;
    transform: translateY(0rem)
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 7.5rem;
  align-items: center;
  flex-direction: column;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;
  opacity: 0;
  transform: translateY(0.625rem);

  h3 {
    margin-bottom: 1.875rem;
    font-weight: 400;
  }

  button {
    margin: 1.875rem auto;
    display: block;
  }

  form div input {
    &:nth-child(2) {
      width: 270px;
      height: 0px;
    }
  }
`;
