import React, {AnchorHTMLAttributes, FunctionComponent} from 'react';

export const ExternalLink: FunctionComponent<AnchorHTMLAttributes<HTMLAnchorElement>> = ({href, children, ...props}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
    </a>
);
