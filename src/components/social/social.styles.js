import {css} from 'emotion';
import {SPACER_BIG, SPACER, SPACER_SMALL, COLOR_JUNGLE_GREEN, COLOR_GITHUB, COLOR_LINKEDIN, COLOR_EMAIL} from '../../styles/variables';
import {mediaMin} from '../../utils/style.utils';

export const footer = css`
    padding: ${SPACER_BIG}px 0;
    ${mediaMin('xl')} {
        margin-bottom: 3em;
    }
`;

export const socialIcons = css`
    text-align: center;
`;

export const icon = css`
    margin: 0 ${SPACER}px;
    color: ${COLOR_JUNGLE_GREEN};
    opacity: 0.3;
    font-size: 0.9em;
    font-weight: 500;
    transition: color 300ms linear, opacity 420ms ease-out;
    vertical-align: middle;
    padding: ${SPACER_SMALL}px;

    &:before {
        font-size: 1.5em;
        vertical-align: middle;
        margin-right: ${SPACER_SMALL}px;
    }

    &:hover {
        opacity: 1;

        &.icon-github {
            color: ${COLOR_GITHUB};
        }

        &.icon-linkedin {
            color: ${COLOR_LINKEDIN};
        }

        &.icon-at {
            color: ${COLOR_EMAIL};
        }
    }
`;
