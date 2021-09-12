import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.portView};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.sizes.navbar};
`
