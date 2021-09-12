import { ThemeProvider } from 'styled-components'

import type { WithChildren } from 'interfaces/children'

import theme from 'styles/theme'
import { GlobalStyle } from 'styles/global'
import { useSettingsContext } from './settings.context'

function AppContext({ children }: WithChildren): JSX.Element {
  const { isBlockScroll } = useSettingsContext()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle blockScroll={isBlockScroll} />
      {children}
    </ThemeProvider>
  )
}

export default AppContext
