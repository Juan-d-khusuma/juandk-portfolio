import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
 * Document
 */
export default class _Document extends Document {
    /**
     * @return {JSX.Element}
     */
    public render() {
        return (
            <Html>
                <Head />
                <body className="text-black bg-platinum dark:bg-smoky-black dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
