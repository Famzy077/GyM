import '../globals.css'; // Import global styles here
import Layout from '../layout'; // Import your layout if needed
import type { AppProps } from 'next/app'; // Import AppProps type

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;