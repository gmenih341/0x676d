import {css} from 'emotion';
import {COLOR_WHITE, COLOR_FLAME} from '../../styles/variables';

export const homeContainer = css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: COLOR_WHITE,
});

export const cover = css({
    backgroundColor: COLOR_FLAME,
    backgroundImage: `linear-gradient(141deg, #f09819, #edde5d)`,
    position: 'absolute',
    width: '110%',
    height: '35vh',
    left: '-5%',
    top: '-2vh',
    transform: 'rotate(1deg)',
    zIndex: -1,
    transition: 'all 420ms ease-out',
});

export const loadingWrapper = css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    transition: 'opacity 300ms ease-out',
});

export const loading = css({
    [`.${loadingWrapper}`]: {
        opacity: 0,
    },
    [`.${cover}`]: {
        transform: 'rotate(0)',
        height: '100%',
        top: 0,
    },
});
