import styled from 'styled-components'

type WrapperProps = {
  themeColor?: 'white' | 'primary'
}

export const Wrapper = styled.button<WrapperProps>`
  height: 56px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral.white};
  background-color: ${({ theme, themeColor }) =>
    themeColor
      ? theme.colors.button[themeColor].main
      : theme.colors.button.primary.main};

  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme, themeColor }) =>
      themeColor
        ? theme.colors.button[themeColor].hover
        : theme.colors.button.primary.hover};
  }
`
