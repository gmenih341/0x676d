import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_BLACK, COLOR_GRAY} from '../../constants/style.constants';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {SocialIconItem} from './components/SocialIconItem';
import {SocialIcons} from './components/SocialIcons';
import {NetlifyIcon} from './icons/NetlifyIcon';

export const FooterComponent: FunctionComponent<ClassNameOnly> = React.memo(({className}) => {
    return (
        <footer className={className}>
            <SocialIcons />
            <NetlifySocialIcon icon={<NetlifyIcon width={20} height={20} fill={COLOR_GRAY[3]} />} href="https://netlify.com">
                Hosted on Netlify
            </NetlifySocialIcon>
        </footer>
    );
});

export const Footer = styled(FooterComponent)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR_BLACK};

    ${mediaMin('sm')} {
        justify-content: flex-start;
    }
`;

const NetlifySocialIcon = styled(SocialIconItem)`
    margin-left: auto;

    ${mediaMax('sm')} {
        display: none;
    }
`;
