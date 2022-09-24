import '../css/style.css'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Feeties</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
