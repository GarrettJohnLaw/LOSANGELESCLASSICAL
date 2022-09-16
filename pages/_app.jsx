import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </SSRProvider>
  );
}
