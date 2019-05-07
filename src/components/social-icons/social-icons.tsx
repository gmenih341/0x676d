import React, {FunctionComponent} from 'react';
import {COLOR_GRAY} from '../../style.contants';
import {GithubIcon} from '../icons/github.icon';
import {LinkedInIcon} from '../icons/linked-in.icon';
import {MailIcon} from '../icons/mail.icon';
import {SocialIconItem} from './social-icon-item';
import {LINKEDIN_URL, GITHUB_URL} from '../../social.constants';

const ICON_SIZE = 20;
const ICON_COLOR = COLOR_GRAY[6];

export const SocialIcons: FunctionComponent = React.memo(() => {
    return (
        <div>
            <SocialIconItem icon={<MailIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />} href="mailto:gregor@menih.si">
                gregor@menih.si
            </SocialIconItem>
            <SocialIconItem icon={<LinkedInIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />} href={LINKEDIN_URL}>
                gregor-menih on LinkedIn
            </SocialIconItem>
            <SocialIconItem icon={<GithubIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />} href={GITHUB_URL}>
                gmenih341 on GitHub
            </SocialIconItem>
        </div>
    );
});

export default SocialIcons;
