import Layout from 'components/core/Layout'
import FormNewGroupColors from 'components/presentation/home/FormNewGroupColors'
import NewGroupColorsModal from 'components/presentation/home/NewGroupColorsModal'

import { useSettingsContext } from 'contexts/settings.context'
import { useNewGroupColors } from 'useCases/group-colors'

import type { SubmitData } from 'components/presentation/home/FormNewGroupColors/FormNewGroupColors'
import { useEffect, useState } from 'react'
import api from 'services/api'
import { GroupColor } from 'interfaces/group-color'
import ListColorGroup from 'components/presentation/home/ListColorGroup'

function Home(): JSX.Element {
  const [groupsColors, setGroupColors] = useState<GroupColor[]>([])
  const { isNewColorsGroupOpen, setIsNewColorsGroupOpen } = useSettingsContext()
  const { handleNewGroupColors, isPending } = useNewGroupColors()

  function fetchColors() {
    api.get('colors').then((res) => setGroupColors(res.data.colors))
  }

  useEffect(() => {
    fetchColors()
  }, [])

  async function handleSubmit(data: SubmitData) {
    handleNewGroupColors(data)
    setIsNewColorsGroupOpen(false)
    await fetchColors()
  }

  return (
    <Layout>
      <ListColorGroup groups={groupsColors} />
      <NewGroupColorsModal
        isOpen={isNewColorsGroupOpen}
        onRequestClose={() => setIsNewColorsGroupOpen(false)}
      >
        <FormNewGroupColors onSubmit={handleSubmit} isPending={isPending} />
      </NewGroupColorsModal>
    </Layout>
  )
}

export default Home
