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
  flex-wrap: wrap;
  justify-content: center;
  padding: 75px 0 15px 0;
`;

export const BoxPallet = styled.div`
  width: 230px;
  height: 280px;

  box-shadow: var(--box-shadow);
  border-radius: 0.3125rem;

  padding: 20px 15px;

  @media (max-width: 500px) and (min-width: 300px) {
    margin: 5px;
  }
  margin: 10px;

  transition: all 0.3s ease;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;

  opacity: 0;
  transform: translateY(0.625rem);

  @media (min-width: 300px) and (max-width: 500px) {
    opacity: 1;
    width: 8rem;
    height: 9.5rem;
  }

  @media (max-width: 31.25rem) {
    .pallet__date {
      display: none;
    }
  }
`;

export const PalletColors = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 250px;

  @media (min-width: 300px) and (max-width: 500px) {
    height: auto;
  }

  div {
    height: 3.125rem;
    position: relative;

    @media (min-width: 300px) and (max-width: 500px) {
      height: 2.1rem;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      height: 100px;

      @media (min-width: 300px) and (max-width: 500px) {
        height: 3rem;
      }
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      height: 35px;

      @media (min-width: 300px) and (max-width: 500px) {
        height: 20px;
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
  font-size: 0.8rem;

  @media (min-width: 300px) and (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25rem) {
    justify-content: center;
    margin-top: 5px;
  }
`;
