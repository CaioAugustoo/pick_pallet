import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border-radius: 0.25rem;
  border: 0.0625rem solid #e9f2f9;
  padding: 0.4375rem 0.8125rem;
  line-height: 1.25rem;
  background: #fff;
  transition: all .3s ease;
  cursor: pointer;
  outline: none;
  font-family: 'poppins';
  font-weight: 400;
  display: flex;
  align-items: center;

  @media (min-width: 18.75rem) and (max-width: 75rem) {
    line-height: 1rem;
    margin-top: 0.3125rem;
    font-size: 0.7rem;
    padding: 0.25rem 0.4375rem;
  }

  img {
    margin: 0rem 0.5rem;
  }

  &:hover {
    opacity: 0.8;
  } 
`;
