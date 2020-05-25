/// <reference types="next" />
/// <reference types="next/types/global" />
import 'styled-components/macro';
declare module 'styled-components/macro' {
    export interface DefaultTheme {
        spacers: number[];
        fontSizes: number[];
        colors: {
            pageBackground: string;
            terminalBackground: string;
            textDark: string;
            textLight: string;
            main: string;
            mainLight: string;
        };
    }
}
