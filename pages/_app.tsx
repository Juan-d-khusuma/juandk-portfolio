import 'tailwindcss/tailwind.css';
import '@styles/globals.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Footer from '@components/Footer';

/**
 * @param {AppProps} props
 * @return {React.ReactElement}
 */
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <div className="font-mono">
                <Head>
                    <title>Juan D Khusuma | Software Developer</title>
                    <link
                        rel="shortcut icon"
                        href="favicon.ico"
                        type="image/x-icon"
                    />
                </Head>
                <Component {...pageProps} />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
