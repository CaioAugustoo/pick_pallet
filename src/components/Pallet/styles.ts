import styled, { css, keyframes } from "styled-components";

import { item } from "styles/keyframes";

interface IPallet {
  small?: boolean;
  big?: boolean;
  empty?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0.75rem 0 1.5rem 0;
`;

export const BoxPallet = styled.div<IPallet>`
  ${({ small }) => css`
    width: ${small ? "auto" : "25rem"};

    border-radius: 0.5rem;

    padding: ${small ? "0" : "20px 15px"};
    margin: ${small ? "10px 0 0 0" : "10px"};

    transition: all 0.3s ease;
    animation: ${item} 0.4s ease;
    animation-fill-mode: both;

    opacity: 0;

    cursor: pointer;

    @media (max-width: 850px) {
      width: 15rem;
      padding: 0;
    }
  `}
`;

export const Color = styled.p`
  cursor: pointer;
  opacity: 0;

  color: white;
  background: rgba(0, 0, 0, 0.2);
  display: inline;

  padding: 5px 5px 1px 5px;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  transition: all 0.3s ease;
`;

const Gradient = keyframes`
  0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const PalletColors = styled.div<IPallet>`
  ${({ small }) => css`
    display: flex;
    flex-direction: column;

    border-radius: 4px;

    width: ${small ? "5rem" : "auto"};

    .pallet_1 {
      padding-top: 30%;

      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;

      @media (max-width: 850px) {
        padding-top: 15%;
      }

      &.small {
        border-top-right-radius: 0.4rem;
        border-top-left-radius: 0.4rem;
        padding-top: 35%;
      }
    }

    .pallet_2 {
      padding-top: 15%;

      @media (max-width: 850px) {
        padding-top: 10%;
      }

      &.small {
        padding-top: 20%;
      }
    }

    .pallet_3,
    .pallet_4 {
      padding-top: 6%;

      @media (max-width: 850px) {
        padding-top: 4%;
      }

      &.small {
        padding-top: 15%;
      }
    }

    .pallet_4 {
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;

      &.small {
        border-bottom-right-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
      }
    }

    .pallet_1,
    .pallet_2,
    .pallet_3,
    .pallet_4 {
      &:hover {
        ${Color} {
          opacity: 1;
        }
      }
    }
  `}
  ${({ empty }) =>
    empty &&
    css`
      .pallet_1,
      .pallet_2,
      .pallet_3,
      .pallet_4 {
        background: linear-gradient(-75deg, #707b7c, #b2babb, #7f8c8d, #ccd1d1);
        background-size: 400% 400%;
        animation: ${Gradient} 5s ease infinite;

        span {
          padding: 5px 5px 1px 5px;
        }
      }
    `}
`;

export const PostedAt = styled.p`
  font-size: 1.28rem;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`;
