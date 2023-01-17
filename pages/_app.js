import '../styles/globals.css'
import homeImage from "../public/assets/img/about_banner.jpg"
import Layout from '../components/layouts/Layout'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar'
import 'react-loading-skeleton/dist/skeleton.css'
import { SSRProvider } from 'react-bootstrap'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from "../lib/gtag"
import { DefaultSeo } from 'next-seo'

function MyApp({  Component,  pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  useEffect(()=>{ 
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }

  }, [router.events])
  return (
    <>
      <DefaultSeo
            title="Get Home Faster | RushHome"
            description="Welcome to RushHome. We clear the clutter, so you see more of what you want, and less of what you don&#39;t."
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: process.env.NEXT_PUBLIC_HOST_NAME,
                images: [
                      {
                          url: `${process.env.NEXT_PUBLIC_HOST_NAME}/assets/img/about_banner.jpg`,
                          width: 800,
                          height: 600,
                          alt: 'RushHome',
                      }
                  ],
                siteName: 'RushHome',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
        <SSRProvider>
          <SessionProvider session={session}>
            <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={50} height={3} showOnShallow={true}  options={{ showSpinner: false }} />
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </SSRProvider>
    </>
  )
}

export default MyApp