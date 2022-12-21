import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import React from "react"

export default function Layout({ getLayout, children }) {
  console.log(getLayout, children)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>RushHome</title>
      </Head>
      <div className="page-wrapper">
          <Navbar />
          <main>
            {/* {children} */}
          {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  //console.log("element set")
                    return React.cloneElement(child);
                }
          })}
          </main>
          {!getLayout && <Footer />}
      </div>
    </>
  )
}