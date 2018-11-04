import {css} from 'emotion';

const spacer = 12;
const screenSm = 576;

export const header = css({
    minHeight: 180,
    flexGrow: 0,
    position: 'relative',
});

export const logo = css({
    display: 'block',
    height: 100,
    width: 200,
    margin: [spacer, 0, 0, 0],
    svg: {
        width: '90%',
        maxHeight: '100%',
        margin: '5%',
    },
    [`@media screen and (min-width: ${screenSm}px)`]: {
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
    [`@media screen and (min-width: ${screenSm}px)`]: {
        flexDirection: 'row',
        justifyContent: 'center',
        [`.${scrollable}`]: {
            marginLeft: spacer,
        },
    },
});
