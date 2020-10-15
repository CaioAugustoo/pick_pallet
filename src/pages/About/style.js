import styled from 'styled-components';

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

  p {
    padding: 1.875rem 0rem;
    font-size: 0.9rem;
  }

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    max-width: 300px;
  }
`;

export const ForWho = styled.div`
  margin: 1.25rem 0rem 1.875rem;
  max-width: 46.875rem;

  p {
    padding: 30px 0px;
    font-size: 0.9rem;
  }

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    max-width: 18.75rem;
  }
`;