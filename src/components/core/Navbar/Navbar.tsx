import Link from 'next/link'

import * as S from './Navbar.styles'

type NavbarProps = {
  logoTo?: string
}

import Logo from 'assets/logo.png'
import Button from '../Button'
import { useSettingsContext } from 'contexts/settings.context'

function Navbar({ logoTo }: NavbarProps): JSX.Element {
  const { setIsNewColorsGroupOpen, isNewColorsGroupOpen, setIsBlockScroll } =
    useSettingsContext()

  return (
    <S.Container>
      <S.Wrapper>
        <Link href={logoTo || '/'}>
          <a>
            <img src={Logo} alt="Logo" />
          </a>
        </Link>
        <Button
          label="Adicionar grupo de cor"
          themeColor="white"
          onClick={() => {
            setIsNewColorsGroupOpen(!isNewColorsGroupOpen)
            setIsBlockScroll(true)
          }}
        />
      </S.Wrapper>
    </S.Container>
  )
}

export default Navbar
