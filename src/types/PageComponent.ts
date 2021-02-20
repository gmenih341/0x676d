import {CSSProperties, FunctionComponent, FC} from 'react';

export interface ContentComponentProps {
    style: CSSProperties;
}

export type ContentComponentType = FC<ContentComponentProps>;

export interface HeaderComponentProps {
    imageStyle: CSSProperties;
    contentStyle: CSSProperties;
    style: CSSProperties;
}

export type HeaderComponentType = FC<HeaderComponentProps>;

export interface PageComponent {
    HeaderComponent: FunctionComponent<HeaderComponentProps>;
    ContentComponent: FunctionComponent<ContentComponentProps>;
}
