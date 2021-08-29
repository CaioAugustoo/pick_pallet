import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 15px;

  a {
    font-size: 1.3rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h4`
  margin: 1rem 0;
  font-weight: 500;
`;

export const FavoritesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 30rem;
  max-height: 20rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .favorite {
    margin: 0.4rem;
  }
`;
