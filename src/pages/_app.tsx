import type { AppProps } from 'next/app'

function MyApp({ pageProps, Component }: AppProps): JSX.Element {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp