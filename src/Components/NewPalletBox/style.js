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

  input {
    opacity: 0;
  }

  div {
    width: 370px;
    margin: 0 auto;
  }

  h3 {
    margin-bottom: 1.875rem;
    font-weight: 400;
  }

  button {
    margin: 1.875rem auto;
    display: block;
  }
`;

export const FirstColorPallet = styled.div`
  background-color: ${props => props.color1};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const SecondColorPallet = styled.div`
  background-color: ${props => props.color2};
`;

export const ThirdColorPallet = styled.div`
  background-color: ${props => props.color3};

  input {
    height: 4.625rem;
  }
`;

export const FourthColorPallet = styled.div`
  background-color: ${props => props.color4};

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  input {
    height: 4.1rem;
  }
`;
