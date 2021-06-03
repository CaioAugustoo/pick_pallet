import styled from "styled-components";
import { item } from "styles/keyframes";


export const Wrapper = styled.div`
  display: flex;
  margin-top: 12rem;
  align-items: center;
  flex-direction: column;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;
  opacity: 0;

  input {
    opacity: 0;
  }
  div {
    width: 370px;
    margin: 0 auto;

    @media (min-width: 300px) and (max-width: 400px) {
      width: 300px;
    }
  }

  h3 {
    margin-bottom: 30px;
    font-weight: 400;
  }

  button {
    margin: 3rem auto;
    display: block;
  }
`;

export const FirstColorPallet = styled.div`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const ThirdColorPallet = styled.div`
  input {
    height: 7.4rem;
  }
`;

export const FourthColorPallet = styled.div`
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  input {
    height: 6.6rem;
  }
`;
