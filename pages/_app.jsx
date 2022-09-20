import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      {/* Google tag (gtag.js)
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J8Z3RTC2PZ"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-J8Z3RTC2PZ');
      </script> */}
      <SSRProvider>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </SSRProvider>
    </>
  );
}
