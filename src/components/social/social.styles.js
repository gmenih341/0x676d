import {css} from 'emotion';
import {SPACER_BIG, SPACER, SPACER_SMALL, COLOR_JUNGLE_GREEN, COLOR_GITHUB, COLOR_LINKEDIN, COLOR_EMAIL} from '../../styles/variables';
import {mediaMin} from '../../utils/style.utils';

export const footer = css({
    padding: `${SPACER_BIG}px 0`,
    [mediaMin('xl')]: {
        marginBottom: '3em',
    },
});

export const socialIcons = css({
    textAlign: 'center',
});

export const icon = css({
    margin: `0 ${SPACER}px`,
    color: COLOR_JUNGLE_GREEN,
    opacity: 0.3,
    fontSize: '0.9em',
    fontWeight: 500,
    transition: 'color 300ms linear, opacity 420ms ease-out',
    verticalAlign: 'middle',
    padding: SPACER_SMALL,
    ['&:before']: {
        fontSize: '1.5em',
        verticalAlign: 'middle',
        marginRight: SPACER_SMALL,
    },
    ['&:hover']: {
        opacity: 1,
        ['&.icon-github']: {
            color: COLOR_GITHUB,
        },
        ['&.icon-linkedin']: {
            color: COLOR_LINKEDIN,
        },
        ['&.icon-at']: {
            color: COLOR_EMAIL,
        },
    },
});
