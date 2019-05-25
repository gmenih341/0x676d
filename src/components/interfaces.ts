import {RouterProps} from 'next/router';
import {ComponentClass} from 'react';

export interface PageComponent extends ComponentClass {
    displayName: string;
    customContent?: boolean;
}
