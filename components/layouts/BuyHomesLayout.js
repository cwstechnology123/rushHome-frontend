import Navbar from './Navbar'
import Head from 'next/head'

const BuyLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>RushHome</title>
      </Head>
      <div className="page-wrapper">
          <Navbar />
          <main>{children}</main>
      </div>
    </>
  )
}

export const getLayout = page => {
  return (
    <BuyLayout>{page}</BuyLayout>
  )
}