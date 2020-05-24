import App from 'next/app';
import * as React from 'react';
import {DefaultLayout} from '../components/DefaultLayout';
import {GlobalStyle} from '../components/GlobalStyle';
import {NextRouterProvider} from '../context/RouterContext';
import {PageComponent} from '../types/PageComponent';
import {ThemeProvider} from 'styled-components/macro';
import {THEME_LIGHT} from '../theme';

export default class AppComponent extends App {
    public render() {
        const {Component}: {Component: PageComponent} = this.props as any;

        return (
            <ThemeProvider theme={THEME_LIGHT}>
                <GlobalStyle />
                <NextRouterProvider>
                    <DefaultLayout pageComponent={Component} />
                </NextRouterProvider>
            </ThemeProvider>
        );
    }
}
