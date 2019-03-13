export enum ScreenSize {
    XS = 0,
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200,
}

export function mediaMin(size: ScreenSize = ScreenSize.XS): string {
    return `@media screen and (min-width: ${size}px)`;
}

export function mediaMax(size: ScreenSize = ScreenSize.XL): string {
    return `@media screen and (max-width: ${size - 1}px)`;
}

export type Unit = 'rem' | 'em' | 'px';

export function lineClamp(lines: number, lineHeight: number = 1.412, unit: Unit = 'rem'): string {
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
