import '../styles/globals.css'
import Layout from '../components/layouts/Layout'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar'
//import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({  Component,  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={50} height={3} showOnShallow={true} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp