import Head from 'next/head'

export default function HeadComp() {
  const title = 'booby'
  const description = 'コントリビュートしやすいOSSプロジェクトを探すためのツールです。'
  const type = 'website'
  const url = 'https://booby-pi.vercel.app/'
  const imageUrl = '/app.png'
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='コントリビュートしやすいOSSプロジェクトを探すためのツールです。'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content={type} />
      <meta property='og:image' content={imageUrl} />
    </Head>
  )
}
