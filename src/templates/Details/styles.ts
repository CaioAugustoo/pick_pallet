import styled, { css } from "styled-components";

import { item } from "styles/keyframes";

interface IPallet {
  small?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0.75rem 0 1.5rem 0;
`;

export const BoxPallet = styled.div<IPallet>`
  width: 60rem;

  border-radius: 0.5rem;

  padding: 20px 15px;
  margin: 7rem auto 0 auto;

  transition: all 0.3s ease;
  animation: ${item} 0.4s ease;
  animation-fill-mode: both;

  opacity: 0;

  @media (max-width: 850px) {
    width: auto;
  }
`;

export const Color = styled.p`
  cursor: pointer;
  opacity: 0;

  color: white;
  background: rgba(0, 0, 0, 0.2);
  display: inline;

  padding: 5px 5px 1px 5px;
  border-top-right-radius: 1rem;

  transition: all 0.3s ease;
`;

export const PalletColors = styled.div<IPallet>`
  display: flex;
  flex-direction: column;

  border-radius: 4px;

  .pallet_1 {
    padding-top: 40%;

    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  .pallet_2 {
    padding-top: 20%;
  }

  .pallet_3,
  .pallet_4 {
    padding-top: 10%;
  }

  .pallet_4 {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
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
`;

export const PostedAt = styled.p`
  font-size: 1.28rem;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;

  padding: 2rem 0;

  button {
    margin-right: 2rem;
  }

  p {
    font-size: 1.3rem;
  }
`;
