import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  max-width: 185rem;
  padding: 5rem 0rem 5rem 0rem;
  margin: 0 auto;

  @media (max-width: 850px) {
    padding: 7rem 0rem 5rem 0rem;
  }

  .left {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 850px) {
      justify-content: center;
    }
  }
`;
