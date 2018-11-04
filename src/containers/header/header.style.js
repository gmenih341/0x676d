import {css} from 'emotion';
import {SPACER} from '../../styles/variables';
import {mediaMin} from '../../utils/style.utils';

export const header = css`
    min-height: 180;
    flex-grow: 0;
    position: relative;
`;

export const logo = css`
    display: block;
    height: 100px;
    width: 200px;
    margin: ${SPACER}px 0 0 0;

    svg {
        width: 90%;
        max-height: 100%;
        margin: 5%;
    }

    ${mediaMin('sm')} {
        height: 100%;
        min-height: 180px;
        background-size: auto 60%;
        margin: 0;
        svg {
            width: 70%;
            margin: 15%;
        }
    }
`;

export const scrollable = css`
    overflow: hidden;
`;

export const titles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: static;

    ${mediaMin('sm')} {
        flex-direction: row;
        justify-content: center;

        .${scrollable} {
            margin-left: ${SPACER}px;
        }
    }
`;
