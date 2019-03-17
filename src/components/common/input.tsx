import styled from 'styled-components';
import {SPACER_SMALL, SPACER, SPACER_BIG, COLOR_GRAY, COLOR_BLACK} from '../../style.contants';

export function makeInputComponent<C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(type: C) {
    return styled(type)`
        display: block;
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: ${SPACER_SMALL}px ${SPACER}px;
        padding-right: ${SPACER_BIG + 5}px;
        overflow: hidden;
        border: 1px solid ${COLOR_GRAY[4]};
        background: ${COLOR_GRAY[2]};
        color: ${COLOR_BLACK};
        font-family: 'Fira Code', Arial, Helvetica, sans-serif;
        font-size: 13px;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
    `;
}
