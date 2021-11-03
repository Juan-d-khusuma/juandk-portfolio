import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

/**
 * @param {AppProps} props
 * @return {React.ReactElement}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
