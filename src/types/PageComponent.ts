import {FunctionComponent, Ref} from 'react';

// export interface PageComponent<T = any> extends FunctionComponent<RouterProps> {
//     displayName: string;
//     index: number;
//     headerContent: ReactNode;
//     contentItems: FunctionComponent<{style: any; key: any}>[];
//     image?: string;
//     getInitialProps?: GetInitialProps<T, NextContext>;
// }

interface Transitionable {
    imageStyle: any;
    contentStyle: any;
    style: any;
}

interface PageComponentProps extends Transitionable {

}

interface HeaderComponentProps extends Transitionable {
}

export interface PageComponent extends FunctionComponent<PageComponentProps> {
    headerComponent: FunctionComponent<HeaderComponentProps>
    displayName: string;
}