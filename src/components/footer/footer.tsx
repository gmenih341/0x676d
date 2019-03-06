import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, SPACER, COLOR_GRAY} from '../../style.contants';
import {mediaMin, ScreenSize, mediaMax} from '../../utils/style.utils';
import SocialIcons from '../social-icons/social-icons';
import {NetlifyIcon} from '../icons/netlify.icon';
import {SocialIconItem} from '../social-icons/social-icon-item';

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
