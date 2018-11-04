import {css, cx} from 'emotion';
import {COLOR_WHITE, COLOR_FLAME} from '../../styles/variables';

export const cover = css`
    background-color: ${COLOR_FLAME};
    background-image: linear-gradient(141deg, #f09819, #edde5d);
    position: absolute;
    width: 110%;
    height: 35vh;
    left: -5%;
    top: -2vh;
    transform: rotate(1deg);
    z-index: -1;
    transition: all 420ms ease-out;
`;

export const loadingWrapper = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: opacity 300ms ease-out;
`;

const container = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLOR_WHITE};
`;

const loading = css`
    .${loadingWrapper} {
        opacity: 0;
    }

    .${cover} {
        transform: rotate(0);
        height: 100%;
        top: 0;
    },
`;

export const homeContainer = (isLoading = false) =>
    cx({
        [container]: true,
        [loading]: isLoading,
    });
