import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { AnimatePresence } from 'framer-motion'
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath

  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <>
      <Script id="google-tag-manager" strategy="lazyOnload">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M4MP3X9');
      `}
      </Script>
      <AnimatePresence initial={false} onExitComplete={onExitComplete} mode="wait">
        <Component key={pageKey} {...pageProps} />
        <ToastContainer />
      </AnimatePresence>
    </>
  )
}
