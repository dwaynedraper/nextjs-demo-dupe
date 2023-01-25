import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  // useEffect(() => {
  //   {
  //     document.body.classList.add("d-flex");
  //     document.body.classList.add("flex-column");
  //     document.body.classList.add("bg-white");
  //   }
  // }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
