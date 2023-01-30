import "@/sass/main.scss";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
