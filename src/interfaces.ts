import {RouterProps} from 'next/router';
import {ReactNode, FunctionComponent} from 'react';

export interface PageComponent extends FunctionComponent<RouterProps> {
    displayName: string;
    index: number;
    headerContent: ReactNode;
    contentItems: FunctionComponent<{style: any; key: any}>[];
    image?: string;
}
