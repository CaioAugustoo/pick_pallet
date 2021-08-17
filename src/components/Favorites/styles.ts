import styled from "styled-components";

export const Wrapper = styled.aside`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
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
