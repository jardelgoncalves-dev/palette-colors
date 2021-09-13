import styled from 'styled-components'

export const Wrapper = styled.input`
  height: ${({ theme }) => theme.sizes.input};
  width: 100%;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.grayscale.paragraph};
  padding: 0 16px;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weight.regular};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.active};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }
`
