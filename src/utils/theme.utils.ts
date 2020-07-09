// eslint-disable-next-line no-restricted-imports
import {ThemedStyledProps} from 'styled-components/macro';
import {opaque} from './style.utils';
import {DefaultTheme} from '../theme';

type StyledFunction<R = any> = (props: ThemedStyledProps<{}, DefaultTheme>) => R;
type ThemeFunction = (theme: DefaultTheme) => number | string;

export function themePx(fn: ThemeFunction): StyledFunction<string> {
    return (props) => (fn(props.theme) || 0) + 'px';
}

export type ValidSpacer = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function themeSpacer(index: ValidSpacer, times = 1): StyledFunction<string> {
    return themePx((theme) => theme.spacers && theme.spacers[index] * times);
}

export function themeColor(color: keyof DefaultTheme['colors'], opaqueness = 1): StyledFunction<string> {
    return (props) => (props.theme.colors && opaque(props.theme.colors[color], opaqueness)) || '';
}
