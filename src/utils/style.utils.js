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

export function mediaMax (size = 'xs') {
    return `@media screen and (max-width: ${screenSizes[size] - 1}px)`;
}
