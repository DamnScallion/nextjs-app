import "../styles/globals.css";
import "../styles/general.sass";
import MainLayout from "../src/compoments/layout/main-layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
