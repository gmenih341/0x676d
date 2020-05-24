/// <reference types="next" />
/// <reference types="next/types/global" />
import 'styled-components/macro';
declare module 'styled-components/macro' {
    export interface DefaultTheme {
        fontStyles: {
            heading: string;
        };
        spacers: number[10];
        colors: {
            pageBackground: string;
            terminalBackground: string;
            yolo: string;
            textLight: string;
            textDark: string;
            // gray: Record<0 | 1 | 2, string>;
            // main: Record<0 | 1 | 2, string>;
        };
    }
}
