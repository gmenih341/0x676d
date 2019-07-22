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

export function opaque(color: string, opacity: number): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    if (result && result.length > 3) {
        return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity.toFixed(1)})`;
    }

    return color;
}

export function boxShadow(color: string): string {
    return `0 3px 6px ${opaque(color, 0.16)}, 0 3px 6px ${opaque(color, 0.23)};`;
}

export function boxShadowFocused(color: string): string {
    return `0 14px 28px ${opaque(color, 0.25)}, 0 10px 10px ${opaque(color, 0.22)};`;
}
