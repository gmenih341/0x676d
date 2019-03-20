import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

export default class extends Document {
    public render() {
        return (
            <html lang="en">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    />
                    <meta property="og:type" content="website" />
                    <meta name="format-detection" content="telephone=no, address=no, email=no" />
                    <link rel="shortcut icon" href="/static/icon.png" />
                    <link href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700|Fira+Sans:300,400,600" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
