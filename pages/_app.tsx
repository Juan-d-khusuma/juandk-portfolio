import 'tailwindcss/tailwind.css';
import '@styles/globals.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';

/**
 * @param {AppProps} props
 * @return {React.ReactElement}
 */
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Juan D Khusuma | Software Developer</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
