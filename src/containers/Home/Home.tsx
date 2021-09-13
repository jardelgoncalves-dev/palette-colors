import Layout from 'components/core/Layout'
import FormNewGroupColors from 'components/presentation/home/FormNewGroupColors'
import NewGroupColorsModal from 'components/presentation/home/NewGroupColorsModal'

import { useSettingsContext } from 'contexts/settings.context'
import { useFetchGroupColors, useNewGroupColors } from 'useCases/group-colors'

import type { SubmitData } from 'components/presentation/home/FormNewGroupColors/FormNewGroupColors'
import ListColorGroup from 'components/presentation/home/ListColorGroup'

function Home(): JSX.Element {
  const { isNewColorsGroupOpen, setIsNewColorsGroupOpen, setIsBlockScroll } =
    useSettingsContext()
  const { handleNewGroupColors, isPending } = useNewGroupColors()
  const { fetchGroupColors, groupColors } = useFetchGroupColors()

  async function handleSubmit(data: SubmitData) {
    await handleNewGroupColors(data)
    await fetchGroupColors()
    setIsNewColorsGroupOpen(false)
    setIsBlockScroll(false)
  }

  return (
    <Layout>
      <ListColorGroup groups={groupColors} />
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
