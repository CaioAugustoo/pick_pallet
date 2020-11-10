import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 7.5rem;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-bottom: 1.875rem;
    font-weight: 400;
  }
  
  button {
    margin: 1.875rem auto;
  }

  form div input {
    &:nth-child(2) {
      width: 270px;
      height: 0px;
    }
  }
`;
