import * as S from './Button.styles'

type ButtonProps = {
  label: string
  type?: 'button' | 'submit'
  onClick?: () => void
  themeColor?: 'white' | 'primary'
}

function Button({
  label,
  type,
  onClick,
  themeColor,
}: ButtonProps): JSX.Element {
  return (
    <S.Wrapper
      onClick={onClick}
      themeColor={themeColor}
      type={type || 'button'}
    >
      {label}
    </S.Wrapper>
  )
}

export default Button
