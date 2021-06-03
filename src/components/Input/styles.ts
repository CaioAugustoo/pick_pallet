import styled from "styled-components";

export const Input = styled.input`
  outline: 0;
  border: 0;

  width: 370px;
  height: 100px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media (min-width: 300px) and (max-width: 400px) {
    width: 300px;
  }
`;