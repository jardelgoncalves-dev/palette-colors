import * as S from './Button.styles'

type ButtonProps = {
  label: string
  type?: 'button' | 'submit'
  onClick?: () => void
  themeColor?: 'white' | 'primary'
  disabled?: boolean
}

function Button({
  label,
  type,
  onClick,
  themeColor,
  disabled,
}: ButtonProps): JSX.Element {
  return (
    <S.Wrapper
      onClick={onClick}
      themeColor={themeColor}
      type={type || 'button'}
      disabled={!!disabled}
    >
      {label}
    </S.Wrapper>
  )
}

export default Button
