import App, {Container, NextAppContext} from 'next/app';
import * as React from 'react';
import {GlobalStyle} from '../src/components/global-style/global-style';
import {Layout} from '../src/components/layout/layout';

export default class extends App {
    static getInitialProps = async ({ctx}: NextAppContext) => {
        return {
            server: !!ctx.req,
            pageProps: {},
        };
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
