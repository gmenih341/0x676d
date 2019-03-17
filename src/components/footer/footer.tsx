import styled from 'styled-components/macro';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, COLOR_GRAY, SPACER} from '../../style.contants';
import {mediaMax, mediaMin, ScreenSize} from '../../utils/style.utils';
import {NetlifyIcon} from '../icons/netlify.icon';
import {SocialIconItem} from '../social-icons/social-icon-item';
import SocialIcons from '../social-icons/social-icons';

const FooterContainer = styled('footer')`
    margin-top: ${SPACER}px;
    grid-area: footer;
    display: flex;
    color: ${COLOR_BLACK};
    justify-content: center;

    ${mediaMin(ScreenSize.SM)} {
        justify-content: flex-start;
    }
`;

const NetlifySocialIcon = styled(SocialIconItem)`
    margin-left: auto;

    ${mediaMax(ScreenSize.SM)} {
        display: none;
    }
`;

export const Footer: FunctionComponent = React.memo(() => {
    return (
        <FooterContainer>
            <SocialIcons />
            <NetlifySocialIcon icon={<NetlifyIcon width={20} height={20} fill={COLOR_GRAY[3]} />} href="https://netlify.com">
                Hosted on Netlify
            </NetlifySocialIcon>
        </FooterContainer>
    );
});
