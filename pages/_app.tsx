import App, {Container} from 'next/app';
import * as React from 'react';
import {GlobalStyle} from '../src/components/global-style/global-style';
import {Main} from '../src/components/layouts/main';
import {NextRouterProvider} from '../src/context/router.context';

export default class AppComponent extends App {
    public render() {
        const {Component} = this.props;

        return (
            <Container>
                <GlobalStyle />
                <NextRouterProvider>
                    <Main pageComponent={Component} />
                </NextRouterProvider>
            </Container>
        );
    }
}
