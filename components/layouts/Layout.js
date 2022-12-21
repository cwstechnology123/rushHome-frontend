import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
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
          <Footer />
      </div>
    </>
  )
}