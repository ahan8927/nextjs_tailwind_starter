import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
