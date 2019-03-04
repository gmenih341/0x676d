import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

export default class extends Document {
    static getInitialProps() {
        return {};
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    />
                    <meta property="og:type" content="website" />
                    <meta name="format-detection" content="telephone=no, address=no, email=no" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}