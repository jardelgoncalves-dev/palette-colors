import styled from 'styled-components'

export const List = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => `repeat(3, ${theme.sizes.card})`};
  grid-gap: 38px;
  margin-top: -70px;
`
