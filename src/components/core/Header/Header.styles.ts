import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.sizes.header};
  background-color: ${({ theme }) => theme.colors.primary.main};
`
