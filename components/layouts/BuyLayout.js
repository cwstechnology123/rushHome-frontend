import NavbarHeader from './NavbarHeader'
import Head from 'next/head'

export default function BuyLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>RushHome</title>
      </Head>
      <div className="page-wrapper">
          <NavbarHeader />
          <main>{children}</main>
      </div>
    </>
  )
}