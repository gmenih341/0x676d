import styled from 'styled-components';
import {COLOR_GRAY, COLOR_WHITE, SPACER, SPACER_SMALL, FONT_MONO} from '../../style.contants';

export function makeInputComponent<C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(type: C) {
    return styled(type)`
        display: block;
        z-index: 10;
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: ${SPACER_SMALL}px ${SPACER}px;
        overflow: hidden;
        border: 1px solid ${COLOR_GRAY[4]};
        background: ${COLOR_GRAY[8]};
        color: ${COLOR_WHITE};
        font-family: ${FONT_MONO};
        font-size: 13px;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
    `;
}
