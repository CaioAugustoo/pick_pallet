import styled from "styled-components";

export const Title = styled.h4`
  margin: 1rem 0;
  font-weight: 500;
`;

export const FavoritesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 20rem;
  max-height: 20rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .favorite {
    margin: 0.4rem;
  }
`;
