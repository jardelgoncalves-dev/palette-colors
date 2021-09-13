import Head from 'next/head'

type HeadSEOProps = {
  title?: string
  ogTitle?: string
  metaDescription?: string
  ogDescription?: string
}

function HeadSEO({
  title,
  ogTitle,
  ogDescription,
  metaDescription,
}: HeadSEOProps): JSX.Element {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      {(title || ogTitle) && (
        <>
          <title>{title || ogTitle}</title>
          <meta itemProp="name" content={title || ogTitle} />
          <meta property="og:title" content={ogTitle || title} />
          <meta name="twitter:title" content={ogTitle || title} />
        </>
      )}

      {(metaDescription || ogDescription) && (
        <>
          <meta name="description" content={metaDescription || ogDescription} />
          <meta
            itemProp="description"
            content={metaDescription || ogDescription}
          />
          <meta
            property="og:description"
            content={ogDescription || metaDescription}
          />
          <meta
            name="twitter:description"
            content={ogDescription || metaDescription}
          />
        </>
      )}
    </Head>
  )
}

export default HeadSEO
