import {RouterProps} from 'next/router';
import {FunctionComponent} from 'react';

export interface PageComponent extends FunctionComponent<RouterProps> {
    displayName: string;
    customContent?: boolean;
}
