import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url("./Background.png");
    margin: 2.5rem 10rem;

    @media (max-width: 1024px) {
      margin: 2.5rem 5rem;
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  button:hover {
    cursor: pointer;
  }
`