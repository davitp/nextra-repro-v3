import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase: 'https://github.com/example',
  feedback: {
    content: null
  },
  editLink: {
    content: 'Make suggestion on GitHub'
  },
  faviconGlyph: '✦',
  logo: () => {
    return (
      <span className="flex items-center text-bold hover:opacity-75 ltr:mr-auto rtl:ml-auto">
        Logo
      </span>
    )
  },
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} - Title`
    const description =
      config.frontMatter.description || 'Description'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={config.title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Learn with " />
        <meta name="twitter:card" content="summary_large_image" />
      </>
    )
  }
}