import 'tailwindcss/tailwind.css';
import '@styles/globals.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

/**
 * @param {AppProps} props
 * @return {React.ReactElement}
 */
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>Juan D Khusuma | Software Developer</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
