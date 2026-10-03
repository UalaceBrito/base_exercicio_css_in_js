import { createGlobalStyle, styled } from 'styled-components'

export const theme = {
  colors: {
    primary: '#a7727d',
    secondary: '#f9f5e7',
    text: '#34272a',
    muted: '#71666a',
    surface: '#ffffff',
    border: '#eadde0'
  }
}

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    min-width: 320px;
    font-family: Lato, Arial, sans-serif;
    color: ${theme.colors.text};
    background: ${theme.colors.surface};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    padding-bottom: 72px;
  }

  button,
  input {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible {
    outline: 3px solid ${theme.colors.primary};
    outline-offset: 3px;
  }
`

export const PageContainer = styled.main`
  width: min(100% - 32px, 1024px);
  margin: 0 auto;
`
