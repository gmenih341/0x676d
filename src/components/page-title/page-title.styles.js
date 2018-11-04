import {css, cx} from 'emotion';
import {SPACER_BIG, COLOR_JUNGLE_GREEN} from '../../styles/variables';
import {mediaMin} from '../../utils/style.utils';

export const title = css`
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 3em;
    text-align: center;
`;

export const description = css`
    display: block;
    font-weight: 300;
    text-align: center;
    transform: scale(0);
`;

const root = css`
    padding: ${SPACER_BIG}px 0;
    color: ${COLOR_JUNGLE_GREEN};
    ${mediaMin('sm')} {
        padding: ${SPACER_BIG * 2}px 0;
    }
`;

const active = css`
    .${description} {
        transform: scale(1);
        transition: transform 250ms ease-in;
    }
`;

export const pageTitle = isActive => cx([root, isActive && active]);
