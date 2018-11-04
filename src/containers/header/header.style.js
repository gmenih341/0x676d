import {css} from 'emotion';
import {SPACER} from '../../styles/variables';
import {mediaMin} from '../../utils/style.utils';

export const header = css({
    minHeight: 180,
    flexGrow: 0,
    position: 'relative',
});

export const logo = css({
    display: 'block',
    height: 100,
    width: 200,
    margin: `${SPACER}px 0 0 0`,
    svg: {
        width: '90%',
        maxHeight: '100%',
        margin: '5%',
    },
    [mediaMin('sm')]: {
        height: '100%',
        minHeight: 180,
        backgroundSize: 'auto 60%',
        margin: 0,
        svg: {
            width: '70%',
            margin: '15%',
        },
    },
});

export const scrollable = css({
    overflow: 'hidden',
});

export const titles = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'static',
    [mediaMin('sm')]: {
        flexDirection: 'row',
        justifyContent: 'center',
        [`.${scrollable}`]: {
            marginLeft: SPACER,
        },
    },
});
