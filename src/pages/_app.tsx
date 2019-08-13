import App, {Container} from 'next/app';
import * as React from 'react';
import {PageComponent} from '../types/PageComponent';
import {GlobalStyle} from '../components/GlobalStyle';
import {NextRouterProvider} from '../context/RouterContext';
import {DefaultLayout} from '../components/DefaultLayout';

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
