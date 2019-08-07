import {CSSProperties, FunctionComponent} from 'react';

export interface PageComponentProps {
    style: CSSProperties;
}

export interface HeaderComponentProps {
    imageStyle: CSSProperties;
    contentStyle: CSSProperties;
    style: CSSProperties;
}

export interface PageComponent extends FunctionComponent<PageComponentProps> {
    headerComponent: FunctionComponent<HeaderComponentProps>;
    displayName: string;
    index: number;
}
