import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  z-index: 2;
  background: var(--secondary-bg);
  box-shadow: var(--secondary-shadow);
  top: 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.p`
  opacity: 0.9;
`;

export const MenuIcon = styled.span`
  font-size: 1.5rem;
  opacity: 0.5;
  color: var(--primary-color);
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Menu = styled.div`
  background: var(--secondary-bg);
  box-shadow: var(--secondary-shadow);
  position: absolute;
  z-index: 10000;
  right: 3.75rem;
  top: 4.1875rem;
  padding: 0.625rem 1.25rem;
  border-bottom-left-radius: 0.1875rem;
  border-bottom-right-radius: 0.1875rem;
  opacity: 0;
  width: 8.75rem;
  transition: opacity .1s ease;

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    right: 0.9375rem;
  }

  ul {
    list-style: none;

    li {
      font-size: 0.9rem;
      transition: opacity .3s ease;
      cursor: pointer;
      padding: 0.625rem 0rem;

      &:hover {
        opacity: 0.5;
      }

      a {
        display: block;
      }
    }
  }
`;