import { WithChildren } from 'interfaces/children'
import * as S from './Layout.styles'

function Layout({ children }: WithChildren): JSX.Element {
  return <S.Main>{children}</S.Main>
}

export default Layout
