import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 55px;
`;

export const BoxPallet = styled.div`
  width: 100%;
  height: 750px;
  box-shadow: var(--box-shadow);
  border-radius: 0.3125rem;
  padding: 20px 15px;
  margin: 10px;
  transition: all .3s ease;

  @media (min-width: 18.75rem) and (max-width: 75rem) {
      height: 100%;
    }

  button {
    margin-top: 15px;
  }
`;

export const PalletColors = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  div {
    height: 150px;

    @media (min-width: 18.75rem) and (max-width: 75rem) {
      height: 4.375rem;
    }

    p {
      opacity: 0;
      position: relative;
      bottom: -121px;
      text-transform: uppercase;
      width: 80px;
      padding: 2px 5px;
      background: rgba(0, 0, 0, 0.1);
      letter-spacing: 1px;
      border-radius: 2px;
      color: var(--secondary-bg);
      cursor: pointer;
      transition: all .2s ease;
      border: none;
      
      @media (min-width: 18.75rem) and (max-width: 75rem) {
        bottom: 1.75rem;
        opacity: 1;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    &:hover {
      p {
        opacity: 1;
      }
    } 
  }

  div:first-child {
    width: 100%;
    height: 300px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    @media (min-width: 18.75rem) and (max-width: 75rem) {
      height: 6.25rem;
    }

    p {
      opacity: 0;
      position: relative;
      bottom: -271px;
      text-transform: uppercase;
      width: 76px;
      padding: 2px 5px;
      background: rgba(0, 0, 0, 0.1);
      letter-spacing: 1px;
      border-radius: 2px;
      color: var(--secondary-bg);
      cursor: pointer;
      transition: all .2s ease;
      border: none;

      @media (min-width: 18.75rem) and (max-width: 75rem) {
        bottom: -16.3125rem;
        opacity: 1;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    &:hover {
      p {
        opacity: 1;
      }
    }
  }
  div:last-child {
    width: 100%;
    height: 100px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    @media (min-width: 18.75rem) and (max-width: 75rem) {
      height: 3.125rem;
    }

    p {
      opacity: 0;
      position: relative;
      bottom: -72px;
      text-transform: uppercase;
      width: 76px;
      padding: 2px 5px;
      background: rgba(0, 0, 0, 0.1);
      letter-spacing: 1px;
      border-radius: 2px;
      color: var(--secondary-bg);
      cursor: pointer;
      transition: all .2s ease;
      border: none;

      @media (min-width: 18.75rem) and (max-width: 75rem) {
        bottom: 1.75rem;
        opacity: 1;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    &:hover {
      p {
        opacity: 1;
      }
    }
  }
`;
