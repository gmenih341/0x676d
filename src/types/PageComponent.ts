import {CSSProperties, FunctionComponent, Dispatch, ReactNode} from 'react';

export interface PageComponentProps {
    childProps: CSSProperties[];
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
}
