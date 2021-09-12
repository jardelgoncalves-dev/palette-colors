import { createContext, useContext, useState } from 'react'
import { WithChildren } from 'interfaces/children'

type SettingContextProps = {
  isBlockScroll: boolean
  setIsBlockScroll: (blocked: boolean) => void
}

export const defaultValue: SettingContextProps = {
  isBlockScroll: false,
  setIsBlockScroll: () => undefined,
}

export const SettingsContext = createContext<SettingContextProps>(defaultValue)

export const SettingsProvider = ({ children }: WithChildren): JSX.Element => {
  const [isBlockScroll, setIsBlockScroll] = useState(defaultValue.isBlockScroll)
  return (
    <SettingsContext.Provider
      value={{
        isBlockScroll,
        setIsBlockScroll,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = (): SettingContextProps =>
  useContext(SettingsContext)
