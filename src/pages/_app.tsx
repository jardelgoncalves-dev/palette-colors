import HeadSEO from 'components/core/HeadSEO'
import AppContext from 'contexts/app.context'
import { SettingsProvider } from 'contexts/settings.context'

import Header from 'components/core/Header'
import Navbar from 'components/core/Navbar'

import type { AppProps } from 'next/app'

function MyApp({ pageProps, Component }: AppProps): JSX.Element {
  return (
    <SettingsProvider>
      <AppContext>
        <HeadSEO
          title={pageProps.pageTitle}
          ogTitle={pageProps.ogTitle}
          metaDescription={pageProps.metaDescription}
          ogDescription={pageProps.ogDescription}
        />
        <Header>
          <Navbar />
        </Header>
        <Component {...pageProps} />
      </AppContext>
    </SettingsProvider>
  )
}

export default MyApp
