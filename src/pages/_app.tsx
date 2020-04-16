import App from 'next/app';
import * as React from 'react';
import {DefaultLayout} from '../components/DefaultLayout';
import {GlobalStyle} from '../components/GlobalStyle';
import {NextRouterProvider} from '../context/RouterContext';
import {PageComponent} from '../types/PageComponent';

export default class AppComponent extends App {
    public render() {
        const {Component}: {Component: PageComponent} = this.props as any;

        return (
            <>
                <GlobalStyle />
                <NextRouterProvider>
                    <DefaultLayout pageComponent={Component} />
                </NextRouterProvider>
            </>
        );
    }
}
