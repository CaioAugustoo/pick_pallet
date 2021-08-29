import styled from "styled-components";

export const Wrapper = styled.aside`
  position: -webkit-sticky;
  position: sticky;

  margin-top: 2.6rem;
  top: 8rem;
`;

export const Title = styled.h4`
  font-size: 2rem;
  max-width: 30rem;
  line-height: 1.3;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  max-width: 30rem;
  margin: 1rem 0;
`;

export const Line = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    #000000 50%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100%;
  margin: 2rem 0;
  height: 1px;
  opacity: 0.1;
`;
