// eslint-disable-next-line no-restricted-imports
import {DefaultTheme, ThemedStyledProps} from 'styled-components/macro';

type StyledFunction<R = any> = (props: ThemedStyledProps<{}, DefaultTheme>) => R;
type ThemeFunction = (theme: DefaultTheme) => number | string;

export function themePx(fn: ThemeFunction): StyledFunction<string> {
    return (props) => (fn(props.theme) || 0) + 'px';
}

export type ValidSpacer = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function themeSpacer(index: ValidSpacer, times = 1): StyledFunction<string> {
    return themePx((theme) => theme.spacers[index] * times);
}

export function themeColor (color: keyof DefaultTheme['colors']): StyledFunction<string> {
    return (props) => props.theme.colors[color];
}
