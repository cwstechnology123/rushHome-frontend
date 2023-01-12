import '../styles/globals.css'
import Layout from '../components/layouts/Layout'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar'
import 'react-loading-skeleton/dist/skeleton.css'
import { SSRProvider } from 'react-bootstrap'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from "../lib/gtag"

function MyApp({  Component,  pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={50} height={3} showOnShallow={true}  options={{ showSpinner: false }} />
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </SSRProvider>
  )
}

export default MyApp