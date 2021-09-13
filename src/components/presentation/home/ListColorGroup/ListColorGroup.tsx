import ColorGroup from 'components/core/ColorGroup'
import { nanoid } from 'nanoid'
import type { GroupColor } from 'interfaces/group-color'
import * as S from './ListColorGroup.styles'

type ListColorGroupProps = {
  groups: GroupColor[]
}

function ListColorGroup({ groups }: ListColorGroupProps): JSX.Element {
  return (
    <S.List>
      {groups.map((group: GroupColor) => (
        <ColorGroup
          key={nanoid()}
          colors={group.colors}
          groupname={group.name}
        />
      ))}
    </S.List>
  )
}

export default ListColorGroup
