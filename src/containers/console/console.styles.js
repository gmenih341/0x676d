import {css, keyframes} from 'emotion';
import {
    COLOR_JUNGLE_GREEN,
    SPACER,
    COLOR_WHITE,
    COLOR_FLAME,
    COLOR_DEEP_SPACE_SPARKLE,
    CONSOLE_FONT,
    SPACER_BIG,
} from '../../styles/variables';

export const console = css`
    height: 100%;
    position: relative;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

export const content = css`
    font-family: ${CONSOLE_FONT};
    font-size: 0.9em;
    font-variant-ligatures: common-ligatures;
    background-color: ${COLOR_JUNGLE_GREEN};
    padding: ${SPACER}px;
    color: ${COLOR_WHITE};
    overflow: auto;
    height: 100%;
`;

export const r = css`
    color: ${COLOR_FLAME};
`;

export const y = css`
    color: ${COLOR_DEEP_SPACE_SPARKLE};
`;

const scroll = keyframes(`
    0%, 40%, 80% {
        transform: translateY(-2px);
    }

    20%, 60% {
        transform: translateY(2px);
    }

    80% {
        height: 8px;
        opacity: 1;
    }

    90% {
        transform: translateY(15px);
        height: 15px;
    }

    100% {
        transform: translateY(-1px);
        height: 8px;
    }
`);

export const scrollIndicator = css`
    border: 3px solid ${COLOR_FLAME};
    border-radius: 35%;
    height: 50px;
    width: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: ${SPACER_BIG}px;
    opacity: 0.6;
    transform: translateX(-50%);
`;

export const scrollWheel = css`
    width: 4px;
    height: 8px;
    background-color: ${COLOR_FLAME};
    margin: 10px -2px;
    border-radius: 35%;
    animation: ${scroll} 7s infinite;
`;
