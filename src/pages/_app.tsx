import HeadSEO from 'components/core/HeadSEO'
import AppContext from 'contexts/app.context'
import { SettingsProvider } from 'contexts/settings.context'
import type { AppProps } from 'next/app'

function MyApp({ pageProps, Component }: AppProps): JSX.Element {
  return (
    <SettingsProvider>
      <AppContext>
        <HeadSEO
          title={pageProps.title}
          ogTitle={pageProps.ogTitle}
          metaDescription={pageProps.metaDescription}
          ogDescription={pageProps.ogDescription}
        />
        <Component {...pageProps} />
      </AppContext>
    </SettingsProvider>
  )
}

export default MyApp
