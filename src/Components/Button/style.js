import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 0.25rem;
  border: 0.0625rem solid #e9f2f9;
  padding: 0.4375rem 0.8125rem;
  line-height: 1.25rem;
  background: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  font-family: "Poppins";

  @media (min-width: 18.75rem) and (max-width: 75rem) {
    line-height: 1rem;
    font-size: 0.7rem;
    padding: 0.25rem 0.4375rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;
