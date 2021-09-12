import { nanoid } from 'nanoid'
import * as S from './ColorGroup.styles'

type ColorGroupProps = {
  colors: string[]
  groupname: string
}

function ColorGroup({ colors, groupname }: ColorGroupProps): JSX.Element {
  return (
    <S.Box>
      <S.Colors size={colors.length}>
        {colors.map((color) => (
          <S.ColorChip key={nanoid()} hex={color}>
            <span>{color}</span>
          </S.ColorChip>
        ))}
      </S.Colors>
      <S.Details>
        {groupname} <span>{colors.length} cores</span>
      </S.Details>
    </S.Box>
  )
}

export default ColorGroup
