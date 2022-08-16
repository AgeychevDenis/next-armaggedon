import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../layout/Layout';
import { Provider } from "react-redux";
import { store } from "../redux/store";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
