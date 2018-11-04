const screenSizes = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export function mediaMin (size = 'xs') {
    return `@media screen and (min-width: ${screenSizes[size]}px)`;
}

export function mexiaMax (size = 'xs') {
    return `@media screen and (max-width: ${screenSizes[size] - 1}px)`;
}

export const SPACER_SMALL = 6;
export const SPACER = 12;
export const SPACER_BIG = 24;
