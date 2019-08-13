import React, {FunctionComponent} from 'react';
import {COLOR_GRAY} from '../../../constants/style.constants';
import {GithubIcon} from '../icons/GithubIcon';
import {LinkedInIcon} from '../icons/LinkedInIcon';
import {MailIcon} from '../icons/MailIcon';
import {SocialIconItem} from './SocialIconItem';
import {LINKEDIN_URL, GITHUB_URL} from '../../../constants/social.constants';

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
