import styled from "styled-components";
import { item } from "styles/keyframes";

export const Wrapper = styled.div`
  margin: 0 auto;

  max-width: 180rem;
  height: 100vh;
`;

export const BoxPallet = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: 0.3125rem;
  background-color: var(--secondary-bg);

  padding: 20px 15px;
  margin: 75px 15px 0 15px;

  transition: all 0.3s ease;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;

  opacity: 0;
`;

export const PalletColors = styled.div`
  div {
    height: 150px;
    position: relative;

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      height: 300px;

      @media (min-width: 300px) and (max-width: 500px) {
        height: 10rem;
      }
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      height: 100px;

      @media (min-width: 300px) and (max-width: 500px) {
        height: 5rem;
      }
    }
    @media (min-width: 300px) and (max-width: 1200px) {
      height: 7rem;
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
  font-size: 1.2rem;
  margin-left: 10px;

  @media (min-width: 300px) and (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  margin-top: 15px;
`;
