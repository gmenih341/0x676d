import {CSSProperties, FunctionComponent, Dispatch} from 'react';

export interface PageComponentProps {
    setChildren: Dispatch<any[]>;
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
