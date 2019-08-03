import {css, FlattenSimpleInterpolation} from 'styled-components/macro';
import {COLOR_BLACK, COLOR_GRAY, COLOR_WHITE, FONT_SANS, SPACER, SPACER_SMALL} from '../constants/style.constants';
import {boxShadow, boxShadowFocused, opaque} from './style.utils';

export function createBaseContentBox(): FlattenSimpleInterpolation {
    return css`
        position: relative;
        box-sizing: border-box;
        align-self: flex-start;
        width: 100%;
        padding: ${SPACER}px;
        overflow: hidden;
        transition: box-shadow 300ms ease-out;
        box-shadow: ${boxShadow(COLOR_BLACK)};
        background: ${COLOR_BLACK};
        color: ${COLOR_WHITE};
        font-family: ${FONT_SANS};

        line-height: 1.5;

        p,
        span {
            color: ${COLOR_GRAY[1]};
            letter-spacing: 1px;
        }

        code {
            padding: ${SPACER_SMALL / 2}px;
            border-radius: 3px;
            background: ${opaque(COLOR_GRAY[9], 0.5)};
            font-size: 13px;
        }

        a {
            color: inherit;
        }

        :hover {
            box-shadow: ${boxShadowFocused(COLOR_BLACK)};
        }
    `;
}
