import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: flex-start;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primaryDark};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    text-rendering: optimizeLegibility;
    overflow-x:hidden;
    overflow-y: scroll;
  }
  .App {
  font-family: sans-serif;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

  `;
