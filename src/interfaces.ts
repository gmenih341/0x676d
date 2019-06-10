import {RouterProps} from 'next/router';
import {ReactNode, FunctionComponent} from 'react';

export interface PageComponent extends FunctionComponent<RouterProps> {
    displayName: string;
    index: number;
    headerContent: ReactNode;
    contentItems: ReactNode[];
    image?: string;
}
