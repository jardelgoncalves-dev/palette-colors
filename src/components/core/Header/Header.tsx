import type { WithChildren } from 'interfaces/children'

import * as S from './Header.styles'

function Header({ children }: WithChildren): JSX.Element {
  return <S.Container>{children}</S.Container>
}

export default Header
