import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, SPACER} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
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

export const Footer: FunctionComponent = React.memo(() => {
    return (
        <FooterContainer>
            <SocialIcons />
        </FooterContainer>
    );
});
