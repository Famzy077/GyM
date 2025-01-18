import '../globals.css'; // Import global styles here
import Layout from '../layout'; // Import your layout if needed
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';import '@/fontawesome';
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className || 'fallback-sans-serif'}>
          <Layout>
        <Component {...pageProps} />
        </Layout>
    </div>
  );
}

export default MyApp;