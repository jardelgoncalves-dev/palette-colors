import Link from 'next/link'

import * as S from './Navbar.styles'

type NavbarProps = {
  logoTo?: string
}

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
            <img src="/logo.png" alt="Logo" />
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
