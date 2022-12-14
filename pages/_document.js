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
          {/* <script src="../assets/js/fubWidgetTracker.js" async></script> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-S6CHY31B2Z"></script>
          <script src="../assets/js/googleTagManager.js" async></script>
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
