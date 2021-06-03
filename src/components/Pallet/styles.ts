import styled from "styled-components";
import { item } from "styles/keyframes";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0.75rem 0 1.5rem 0;
`;

export const BoxPallet = styled.div`
  width: 23rem;
  height: 28rem;

  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  background-color: var(--secondary-bg);

  padding: 20px 15px;
  margin: 10px;

  transition: all 0.3s ease;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;

  opacity: 0;

  @media (min-width: 300px) and (max-width: 500px) {
    opacity: 1;

    width: 13rem;
    height: 16rem;
  }

  @media (max-width: 500px) {
    .pallet__date {
      display: none;
    }
  }

`;

export const PalletColors = styled.div`
  display: flex;
  flex-direction: column;

  height: 250px;
  border-radius: 4px;

  @media (min-width: 300px) and (max-width: 500px) {
    height: auto;
  }

  div {
    height: 5.0rem;
    position: relative;

    @media (min-width: 300px) and (max-width: 500px) {
      height: 3.4rem;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      height: 100px;

      @media (min-width: 300px) and (max-width: 500px) {
        height: 4.8rem;
      }

    }
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      height: 3.5rem;

      @media (min-width: 300px) and (max-width: 500px) {
        height: 2rem;
      }
    }
    
    p {
      position: absolute;
      bottom: 0;

      opacity: 0;

      text-transform: uppercase;
      color: white;

      cursor: pointer;
      transition: all 0.3s ease;

      padding: 2px 0px 0 0px;
      
      @media (min-width: 300px) and (max-width: 500px) {
        font-size: 0.8rem;
      }
    }
    &:hover {
      p {
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
        padding: 2px 5px 0 5px;
        border-radius: 0 2px 2px 0px;
      }
    }
  }
`;

export const PostedAt = styled.p`
  font-size: 1.28rem;
  
  @media (min-width: 300px) and (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 500px) {
    justify-content: center;
    margin-top: 7px;
  }
`;