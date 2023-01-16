import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.gray300};
    background-color: ${({ theme }) => theme.colors.gray900};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray300};
  }

  button, a {
    cursor: pointer;
  }
`;
