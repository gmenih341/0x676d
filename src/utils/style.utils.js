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

export function lineClamp (lines, lineHeight = 1.412, unit = 'em') {
    return `
        display: block;
        display: -webkit-box;
        max-height: ${lines * lineHeight}${unit};
        overflow: hidden;
        text-overflow: -o-elipsis-lastline;
        text-overflow: elipsis;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
    `;
}
