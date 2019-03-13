import App, {Container} from 'next/app';
import * as React from 'react';
import {GlobalStyle} from '../src/components/global-style/global-style';
import {Layout} from '../src/components/layout/layout';
import {NextRouterProvider} from '../src/context/router.context';

export default class AppComponent extends App {
    public render() {
        const {Component} = this.props;

        return (
            <Container>
                <GlobalStyle />
                <NextRouterProvider>
                    <Layout>{Component}</Layout>
                </NextRouterProvider>
            </Container>
        );
    }
}
