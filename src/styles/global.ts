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

  body, input, select, textarea, button {
    font-family: ${({ theme }) => theme.typography.family.primary};
    color: ${({ theme }) => theme.colors.grayscale.paragraph};
  }

  body {
    ${({ blockScroll }) => css`
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

  .react-modal {
    &__overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.modal.overlay};
    }
    &__content {
      position: relative;
      max-width: 660px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.modal.background};
      border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
      padding: 48px;
    }
  }

  [disabled] {
    opacity: 0.2;
    pointer-events: none;
    cursor: default;
  }
`
