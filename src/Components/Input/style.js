import styled from "styled-components";

export const InputStyled = styled.input`
  outline: 0;
  border: 0;
  width: 370px;
  height: 100px;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    width: 18.75rem;
  }
`;
