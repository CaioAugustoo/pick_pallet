import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<Pick<ButtonProps, "favorited">>`
  ${({ favorited }) => css`
    border-radius: 1rem;
    border: 1px solid var(--border);

    padding: 0.7rem 1.3rem;

    font-family: "Poppins";
    line-height: 2.25rem;

    background: ${favorited ? "var(--liked)" : "var(--primary-bg)"};
    color: var(--primary);
    transition: all 0.3s ease;

    cursor: pointer;
    outline: none;

    @media (min-width: 18.75rem) and (max-width: 75rem) {
      line-height: 2rem;
      font-size: 1.3rem;

      padding: 0.4rem 0.7rem;
    }

    &:hover {
      opacity: 0.8;
    }
  `}
`;
