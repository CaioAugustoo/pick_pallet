import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-bg: #FDFDFD;
    --secondary-bg: #FFFFFF;
    --primary-color: #263646;
    
    --box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);
    --secondary-shadow: 0 5px 10px 0 rgba(0,64,128,.05);
  }

  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    color: var(--primary-color);
    
    background: var(--primary-bg);
  }

  textarea, textarea:focus {
    resize: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f100; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  
`;

export const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;