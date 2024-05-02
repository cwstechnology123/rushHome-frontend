import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
        <Html>
        <Head>
          <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="../assets/css/flaticon.css" />
          <link rel="stylesheet" href="../assets/css/remixicon.css" />
          <link rel="stylesheet" href="../assets/css/fancybox.css" />
          <link rel="stylesheet" href="../assets/css/jquery-ui-min.css" />
          <link rel="stylesheet" href="../assets/css/odometer.min.css" />
          <link rel="stylesheet" href="../assets/css/aos.css" />
          <link rel="stylesheet" href="../assets/css/style.css" />
          <link rel="stylesheet" href="../assets/css/custom.css" />
          <link rel="stylesheet" href="../assets/css/responsive.css" />
          <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />
          <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
          <script defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}></script>
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140459859-1"></script> */}
          <script dangerouslySetInnerHTML={{__html: `var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(["setDomains", ["*.rushhome.vercel.app"]]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//pixeltracking.cwsbuild.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();`}}></script>
          <noscript><p><img referrerpolicy="no-referrer-when-downgrade" src="//pixeltracking.cwsbuild.com/matomo.php?idsite=1&amp;rec=1" style="border:0;" alt="" /></p></noscript>
          <script src="../assets/js/googleTagManager.js" async></script>
          <script src="../assets/js/fubWidgetTracker.js" async></script>
          <script src="../assets/js/jquery.min.js" async></script>
        </Head>
        <body>
            <Main />
            <NextScript />
            <script src="../assets/js/bootstrap.bundle.min.js" async></script>
        </body>
        </Html>
    )
  }
}

export default MyDocument
