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
    overflow-y: overlay;
    
  }

  *::-webkit-scrollbar, body::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
    color: ${({ theme }) => theme.white};

  }
  *::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.white};        /* color of the tracking area */
    position: relative;
    z-index:110;
  }
  *::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primaryDark};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid ${({ theme }) => theme.white};  /* creates padding around scroll thumb */

  }

  .App {
    font-family: sans-serif;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  
}

  `;
