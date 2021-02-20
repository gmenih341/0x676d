import * as React from 'react';
import {FunctionComponent} from 'react';
import {Helmet} from 'react-helmet';

export const Fonts: FunctionComponent = () => {
    return (
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&family=Roboto+Slab:wght@400;600&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};
