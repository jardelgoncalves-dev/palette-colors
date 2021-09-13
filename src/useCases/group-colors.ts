import { GroupColor } from 'interfaces/group-color'
import { useState } from 'react'
import api from 'services/api'

type UseNewGroupColorsProps = {
  handleNewGroupColors: (data: GroupColor) => Promise<void>
  isPending: boolean
}

export function useNewGroupColors(): UseNewGroupColorsProps {
  const [isPending, setIsPending] = useState(false)

  async function handleNewGroupColors(data: GroupColor) {
    setIsPending(true)
    try {
      await api.post('colors', data)
    } catch (error) {
      console.log('create group colors error:', error)
    } finally {
      setIsPending(false)
    }
  }

  return { isPending, handleNewGroupColors }
}
