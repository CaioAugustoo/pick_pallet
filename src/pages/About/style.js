import styled, { keyframes } from "styled-components";

const left = keyframes`
  from {
    opacity: 0
    transform: translateX(-0.625rem);
  } to {
    opacity: 1;
    transform: translateY(0rem)
  }
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.25rem;
  flex-direction: column;

  h2 {
    font-weight: 500;
  }
`;

export const WhatIs = styled.div`
  margin: 4.375rem 0rem 1.875rem;
  max-width: 46.875rem;
  animation: ${left} 0.4s ease;
  animation-fill-mode: both;
  opacity: 0;
  transform: translateX(-0.625rem);

  p {
    padding: 1.875rem 0rem;
    font-size: 0.9rem;
  }

  a {
    color: #5f9fff;
  }

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    max-width: 300px;
  }
`;

export const ForWho = styled.div`
  margin: 1.25rem 0rem 1.875rem;
  max-width: 46.875rem;
  animation: ${left} 0.4s ease;
  animation-fill-mode: both;
  opacity: 0;
  transform: translateX(-0.625rem);

  p {
    padding: 30px 0px;
    font-size: 0.9rem;
  }

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    max-width: 18.75rem;
  }
`;

export const ForDevs = styled.div`
  margin: 1.25rem 0rem 1.875rem;
  max-width: 46.875rem;
  animation: ${left} 0.4s ease;
  animation-fill-mode: both;
  opacity: 0;
  transform: translateX(-0.625rem);

  p {
    padding: 30px 0px;
    font-size: 0.9rem;
  }

  a {
    color: #5f9fff;
  }

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    max-width: 18.75rem;
  }
`;
