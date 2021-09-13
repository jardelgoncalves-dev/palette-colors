import { useSettingsContext } from 'contexts/settings.context'
import type { WithChildren } from 'interfaces/children'
import Modal from 'react-modal'

type NewGroupColorsModalProps = WithChildren & {
  onRequestClose: () => void
  isOpen: boolean
}

Modal.setAppElement('body')

function NewGroupColorsModal({
  children,
  isOpen,
  onRequestClose,
}: NewGroupColorsModalProps): JSX.Element {
  const { setIsBlockScroll } = useSettingsContext()
  function handleRequestClose() {
    setIsBlockScroll(false)
    onRequestClose()
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      className="react-modal__content"
      overlayClassName="react-modal__overlay"
    >
      {children}
    </Modal>
  )
}

export default NewGroupColorsModal
