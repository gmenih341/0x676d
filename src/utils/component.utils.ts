import {css, FlattenInterpolation, ThemeProps, DefaultTheme} from 'styled-components/macro';
import {COLOR_BLACK, COLOR_GRAY, COLOR_WHITE, FONT_SANS} from '../constants/style.constants';
import {boxShadow, boxShadowFocused, opaque} from './style.utils';
import {themeColor, themeSpacer} from './theme.utils';

export function createBaseContentBox(): FlattenInterpolation<ThemeProps<DefaultTheme>> {
    return css`
        position: relative;
        box-sizing: border-box;
        align-self: flex-start;
        width: 100%;
        padding: ${themeSpacer(6)};
        overflow: hidden;
        transition: box-shadow 300ms ease-out;
        border: none;
        box-shadow: ${boxShadow(COLOR_BLACK)};
        background: ${themeColor('terminalBackground')};
        color: ${themeColor('textLight')};
        font-family: ${FONT_SANS};
        line-height: 1.5;

        p,
        span {
            color: ${themeColor('textLight')};
            letter-spacing: 1px;
        }

        code {
            padding: ${themeSpacer(6, 0.5)};
            border-radius: 3px;
            background: ${themeColor('textDark', 0.5)};
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
