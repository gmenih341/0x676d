import React, {FunctionComponent, ReactNode} from 'react';
import styled from 'styled-components/macro';
import {themeColor, themeSpacer} from '../../../utils/theme.utils';
import {ExternalLink} from '../../ExternalLink';

export interface IconItemProps {
    href: string;
    icon: ReactNode;
    className?: string;
    title: string;
}

const Icon: FunctionComponent<IconItemProps> = ({href, icon, title, className}) => (
    <ExternalLink href={href} title={title} className={className}>
        <i>{icon}</i>
    </ExternalLink>
);

export const SocialIconItem = styled(Icon)`
    position: relative;
    overflow: hidden;
    color: ${themeColor('textDark')};
    font-size: 0.8em;
    line-height: 1em;
    text-decoration: none;

    &:not(:last-of-type) {
        margin-right: ${themeSpacer(6)};
    }

    i {
        display: inline-block;
        position: relative;
        padding: ${themeSpacer(3)} ${themeSpacer(6)};
        line-height: 0;
        vertical-align: middle;
    }
`;
