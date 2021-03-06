import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components/macro';
import {COLOR_MAIN} from '../constants/style.constants';

export default class extends Document {
    public static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

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
                    <link rel="shortcut icon" href="/static/m.ico" />
                    <meta name="theme-color" content={COLOR_MAIN[6]}></meta>
                    <link
                        href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,600|Zilla+Slab:400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
