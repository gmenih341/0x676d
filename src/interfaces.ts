import {RouterProps} from 'next/router';
import {FunctionComponent, ReactNode} from 'react';

export interface PageComponent extends FunctionComponent<RouterProps> {
    displayName: string;
    index: number;
    customContent?: boolean;
    children?: ReactNode | ReactNode[];
}
