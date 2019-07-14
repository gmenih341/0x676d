import App, {Container} from 'next/app';
import * as React from 'react';
import {GlobalStyle} from '../src/components/GlobalStyle';
import {NextRouterProvider} from '../src/context/RouterContext';
import {DefaultLayout} from '../src/components/DefaultLayout';
import {PageComponent} from '../src/types/PageComponent';

export default class AppComponent extends App {
    public render() {
        const {Component}: {Component: PageComponent} = this.props as any;

        return (
            <Container>
                <GlobalStyle />
                <NextRouterProvider>
                    <DefaultLayout pageComponent={Component} />
                </NextRouterProvider>
            </Container>
        );
    }
}
