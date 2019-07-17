import {GetInitialProps, NextContext} from 'next';
import {RouterProps} from 'next/router';
import {FunctionComponent, ReactNode} from 'react';

export interface PageComponent<T = any> extends FunctionComponent<RouterProps> {
    displayName: string;
    index: number;
    headerContent: ReactNode;
    contentItems: FunctionComponent<{style: any; key: any}>[];
    image?: string;
    getInitialProps?: GetInitialProps<T, NextContext>;
}
