import '../styles/globals.css'
import Layout from '../components/layouts/Layout'
import BuyLayout from '../components/layouts/BuyLayout'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({  Component,  pageProps: { session, ...pageProps } }) {
  // console.log(Component)
  let CustomLayout = Component.layout? BuyLayout : Layout;
  return (
    <SessionProvider session={session}>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={50} height={3} showOnShallow={true}  options={{ showSpinner: false }} />
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </SessionProvider>
  )
}

export default MyApp