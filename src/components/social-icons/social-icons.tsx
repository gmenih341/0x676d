import React, {FunctionComponent} from 'react';
import {COLOR_GRAY} from '../../style.contants';
import {GithubIcon} from './icons/GithubIcon';
import {LinkedInIcon} from './icons/LinkedInIcon';
import {MailIcon} from './icons/MailIcon';
import {SocialIconItem} from './social-icon-item';

const ICON_SIZE = 20;
const ICON_COLOR = COLOR_GRAY[6];
export const SocialIcons: FunctionComponent = React.memo(() => {
    return (
        <div>
            <SocialIconItem
                icon={<MailIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />}
                href="mailto:gregor@menih.si"
                transitionColor={ICON_COLOR}>
                gregor@menih.si
            </SocialIconItem>
            <SocialIconItem
                icon={<LinkedInIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />}
                href="https://linkedin.com/in/gregor-menih"
                transitionColor={ICON_COLOR}>
                gregor-menih
            </SocialIconItem>
            <SocialIconItem
                icon={<GithubIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />}
                href="https://github.com/gmenih341"
                transitionColor={ICON_COLOR}>
                gmenih341
            </SocialIconItem>
        </div>
    );
});

export default SocialIcons;
