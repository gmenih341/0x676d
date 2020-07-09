import React, {FunctionComponent} from 'react';
import {COLOR_GRAY} from '../../../constants/style.constants';
import {useSocial} from '../../../queries/useSocial';
import {GithubIcon} from '../icons/GithubIcon';
import {LinkedInIcon} from '../icons/LinkedInIcon';
import {MailIcon} from '../icons/MailIcon';
import {SocialIconItem} from './SocialIconItem';

const ICON_SIZE = 20;
const ICON_COLOR = COLOR_GRAY[6];

export const SocialIcons: FunctionComponent = React.memo(() => {
    const social = useSocial();

    return (
        <div>
            <SocialIconItem
                icon={<MailIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />}
                href={`mailto:${social.email}`}
                title={`Email ${social.email}`}
            />
            <SocialIconItem
                icon={<LinkedInIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />}
                href={`https://linkedin.com/in/${social.linkedIn}`}
                title={`${social.linkedIn} on LinkedIn`}
            />
            <SocialIconItem
                icon={<GithubIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />}
                href={`https://github.com/${social.github}`}
                title={`${social.github} on GitHub`}
            />
        </div>
    );
});
