import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-bg: #FDFDFD;
    --secondary-bg: #FFFFFF;
    --primary-color: #263646;
    
    --box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);
    --secondary-shadow: 0 5px 10px 0 rgba(0,64,128,.05);
  }
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    background: var(--primary-bg);
    color: var(--primary-color);
  }

  textarea, textarea:focus {
    resize: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  
`;

export const Container = styled.div`
  max-width: 112.5rem;
  padding: 0.9375rem;
  margin: 0 auto;
`;