import Head from 'next/head'

export default function HeadComp() {
    return (
        <Head>
            <title>booby</title>
            <meta name="description" content="コントリビュートしやすいOSSプロジェクトを探すためのツールです。" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}