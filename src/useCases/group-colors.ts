import { GroupColor } from 'interfaces/group-color'
import { useEffect, useState } from 'react'
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

type UseFetchGroupColorsProps = {
  groupColors: GroupColor[]
  fetchGroupColors: () => Promise<void>
}

export function useFetchGroupColors(): UseFetchGroupColorsProps {
  const [groupColors, setGroupColors] = useState<GroupColor[]>([])

  async function fetchGroupColors() {
    api.get('colors').then((response) => setGroupColors(response.data.colors))
  }

  useEffect(() => {
    fetchGroupColors()
  }, [])
  return { groupColors, fetchGroupColors }
}
