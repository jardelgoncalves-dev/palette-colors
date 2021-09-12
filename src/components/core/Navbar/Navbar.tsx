import Link from 'next/link'

import type { WithChildren } from 'interfaces/children'
import * as S from './Navbar.styles'

type NavbarProps = WithChildren & {
  logoTo?: string
}

import Logo from 'assets/logo.png'

function Navbar({ logoTo, children }: NavbarProps): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <Link href={logoTo || '/'}>
          <a>
            <img src={Logo} alt="Logo" />
          </a>
        </Link>
        {children}
      </S.Wrapper>
    </S.Container>
  )
}

export default Navbar
