import * as React from 'react';
import {FunctionComponent, useMemo} from 'react';
import {Helmet} from 'react-helmet';
import {RouteData} from '../../../types/RouteData';

const DEFAULT_IMAGE = '';

interface MetaProps {
    title: string;
    image?: string;
    description?: string;
    routeData: RouteData;
}

export const Meta: FunctionComponent<MetaProps> = ({title, image, description, routeData}) => {
    const imageUrl = useMemo(() => image || DEFAULT_IMAGE, [image]);
    return (
        <Helmet>
            <title>{`${routeData.head.title} - ${title}`}</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
            <meta name="robots" content="index" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={imageUrl} />
            <meta name="description" content={description}></meta>
        </Helmet>
    );
};
