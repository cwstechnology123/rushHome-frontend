import '../styles/globals.css'
import Layout from '../components/layouts/Layout'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar'
import 'react-loading-skeleton/dist/skeleton.css'
import { SSRProvider } from 'react-bootstrap'

function MyApp({  Component,  pageProps: { session, ...pageProps } }) {
  // console.log(Component)
  // let CustomLayout = Component.layout? BuyLayout : Layout;
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={50} height={3} showOnShallow={true}  options={{ showSpinner: false }} />
        {getLayout(<Component {...pageProps} />)}
        {/* <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout> */}
      </SessionProvider>
    </SSRProvider>
  )
}

export default MyApp