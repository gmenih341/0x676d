import App, {Container, NextAppContext} from 'next/app';
import * as React from 'react';
import {GlobalStyle} from '../src/components/global-style/global-style';
import {Layout} from '../src/components/layout/layout';

export default class extends App {
    static getInitialProps = async ({ctx, Component}: NextAppContext) => {
        const server = !!ctx.req;
        const out = {server} as any;

        if (Component.getInitialProps) {
            return {
                ...out,
                pageProps: {
                    ...(await Component.getInitialProps(ctx)),
                },
            };
        }

        return out;
    };

    render() {
        const {props} = this as any;
        const {Component, pageProps} = props;

        return (
            <Container>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        );
    }
}
