export enum ScreenSize {
    xs = 0,
    sm = 576,
    md = 768,
    lg = 992,
    xl = 1200,
}

export function mediaMin(size: keyof typeof ScreenSize): string {
    return `@media screen and (min-width: ${ScreenSize[size]}px)`;
}

export function mediaMax(size: keyof typeof ScreenSize): string {
    return `@media screen and (max-width: ${ScreenSize[size] - 1}px)`;
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
