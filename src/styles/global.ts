import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  css,
} from 'styled-components'

type GlobalStyleProps = {
  blockScroll?: boolean
}

export const GlobalStyle: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    ${({ theme, blockScroll }) => css`
      font-family: ${theme.typography.family.primary};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-scrolling: touch;
      height: 100%;
      overflow: ${blockScroll ? 'hidden' : 'initial'};
    `}
  }

  a {
    text-decoration: none;
  }

  button {
    appearance: none;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
  }
`
