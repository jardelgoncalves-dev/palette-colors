import { useState } from 'react'
import { SketchPicker, ColorResult, Color } from 'react-color'
import { nanoid } from 'nanoid'

import * as S from './SelectColors.styles'

type SelectColorsProps = {
  onSelected: (colors: string[]) => void
}

function SelectColors({ onSelected }: SelectColorsProps): JSX.Element {
  const [color, setColor] = useState<Color>('#fff')
  const [colors, setColors] = useState<string[]>([])

  function handleColorChange(result: ColorResult) {
    setColor(result.hex)
  }

  function handleAddColor() {
    if (color) {
      onSelected([...colors, color as string])
      setColors((oldValues) => [...oldValues, color as string])
    }
  }

  return (
    <S.Wrapper>
      <S.WrapperPicker>
        <SketchPicker color={color} onChangeComplete={handleColorChange} />
      </S.WrapperPicker>
      <S.WrapperSelecteds>
        <S.Selecteds>
          {colors.map((cor) => (
            <S.CircleColor key={nanoid()} hex={cor} />
          ))}
        </S.Selecteds>
        <S.Button type="button" onClick={handleAddColor} disabled={!color}>
          Add
        </S.Button>
      </S.WrapperSelecteds>
    </S.Wrapper>
  )
}

export default SelectColors
