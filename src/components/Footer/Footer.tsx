import React from 'react';
import styled from 'styled-components/macro';
import {MyStyledComponent} from '../../types/MyStyledComponent';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {themeColor} from '../../utils/theme.utils';
import {SocialIconItem} from './components/SocialIconItem';
import {SocialIcons} from './components/SocialIcons';
import {NetlifyIcon} from './icons/NetlifyIcon';

export const FooterComponent: MyStyledComponent = React.memo(({theme, className}) => {
    return (
        <footer className={className}>
            <SocialIcons />
            <NetlifySocialIcon icon={<NetlifyIcon width={20} height={20} fill="#000" />} href="https://netlify.com">
                Hosted on Netlify
            </NetlifySocialIcon>
        </footer>
    );
});

export const Footer = styled(FooterComponent)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeColor('textDark')};

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
