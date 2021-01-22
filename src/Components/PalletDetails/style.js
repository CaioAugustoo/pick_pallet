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
  justify-content: center;
`;

export const BoxPallet = styled.div`
  width: 100%;
  box-shadow: var(--box-shadow);
  border-radius: 0.3125rem;

  padding: 20px 15px;
  margin-top: 75px;

  transition: all 0.3s ease;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;

  opacity: 0;
  transform: translateY(0.625rem);

  @media (min-width: 300px) and (max-width: 1200px) {
    height: 100%;
  }
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
        height: 6.25rem;
      }
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      height: 100px;

      @media (min-width: 300px) and (max-width: 500px) {
        height: 3.125rem;
      }
    }

    @media (min-width: 300px) and (max-width: 1200px) {
      height: 4.375rem;
    }

    p {
      position: absolute;
      bottom: 0;

      opacity: 0;
      text-transform: uppercase;
      color: white;

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
  font-size: 0.8rem;

  @media (min-width: 300px) and (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 15px;
`;
