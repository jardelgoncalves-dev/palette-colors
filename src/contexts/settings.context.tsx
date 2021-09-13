import { createContext, useContext, useState } from 'react'
import { WithChildren } from 'interfaces/children'

type SettingContextProps = {
  isBlockScroll: boolean
  setIsBlockScroll: (blocked: boolean) => void
  isNewColorsGroupOpen: boolean
  setIsNewColorsGroupOpen: (blocked: boolean) => void
}

export const defaultValue: SettingContextProps = {
  isBlockScroll: false,
  setIsBlockScroll: () => undefined,
  isNewColorsGroupOpen: false,
  setIsNewColorsGroupOpen: () => undefined,
}

export const SettingsContext = createContext<SettingContextProps>(defaultValue)

export const SettingsProvider = ({ children }: WithChildren): JSX.Element => {
  const [isBlockScroll, setIsBlockScroll] = useState(defaultValue.isBlockScroll)
  const [isNewColorsGroupOpen, setIsNewColorsGroupOpen] = useState(
    defaultValue.isNewColorsGroupOpen
  )

  return (
    <SettingsContext.Provider
      value={{
        isBlockScroll,
        setIsBlockScroll,
        isNewColorsGroupOpen,
        setIsNewColorsGroupOpen,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = (): SettingContextProps =>
  useContext(SettingsContext)
