import { forwardRef } from 'react'
import * as S from './Input.styles'

type InputProps = {
  type?: string
  value?: string
  name?: string
  placeholder?: string
  width?: number
  ChangeHandler?: () => void
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <S.Wrapper ref={ref} {...props} />
})

Input.displayName = 'Input'

export default Input
