import {css} from 'emotion';
import {SPACER_BIG, COLOR_JUNGLE_GREEN} from '../../styles/variables';
import {mediaMin} from '../../utils/style.utils';

export const pageTitle = css({
    padding: `${SPACER_BIG}px 0`,
    color: COLOR_JUNGLE_GREEN,
    [mediaMin('sm')]: {
        padding: `${SPACER_BIG * 2}px 0`,
    },
});

export const title = css({
    padding: 0,
    margin: 0,
    fontWeight: 700,
    fontSize: '3em',
    textAlign: 'center',
});

export const description = css({
    display: 'block',
    fontWeight: 300,
    textAlign: 'center',
    transform: 'scale(0)',
});

export const active = css({
    [`.${description}`]: {
        transform: 'scale(1)',
        transition: 'transform 250ms ease-in',
    },
});
