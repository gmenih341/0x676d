import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, COLOR_MAIN, COLOR_WHITE, SPACER} from '../../style.contants';
import {GithubIcon} from './icons/GithubIcon';
import {LinkedInIcon} from './icons/LinkedInIcon';
import {MailIcon} from './icons/MailIcon';
import {SocialIconItem} from './social-icon-item';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

const ICON_SIZE = 25;

const SocialIconsContainer = styled('footer')`
    margin-top: ${SPACER}px;
    grid-area: footer;
    display: flex;
    color: ${COLOR_BLACK};
    justify-content: center;

    ${mediaMin(ScreenSize.SM)} {
        justify-content: flex-start;
    }
`;

export const SocialIcons: FunctionComponent = React.memo(() => {
    return (
        <SocialIconsContainer>
            <SocialIconItem
                icon={<MailIcon width={ICON_SIZE} height={ICON_SIZE} fill={COLOR_WHITE} />}
                href="mailto:gregor@menih.si"
                transitionColor={COLOR_MAIN[5]}>
                gregor@menih.si
            </SocialIconItem>
            <SocialIconItem
                icon={<LinkedInIcon width={ICON_SIZE} height={ICON_SIZE} fill={COLOR_WHITE} />}
                href="https://linkedin.com/in/gregor-menih"
                transitionColor={COLOR_MAIN[6]}>
                /in/gregor-menih
            </SocialIconItem>
            <SocialIconItem
                icon={<GithubIcon width={ICON_SIZE} height={ICON_SIZE} fill={COLOR_WHITE} />}
                href="https://github.com/gmenih341"
                transitionColor={COLOR_MAIN[7]}>
                gmenih341
            </SocialIconItem>
        </SocialIconsContainer>
    );
});

export default SocialIcons;
