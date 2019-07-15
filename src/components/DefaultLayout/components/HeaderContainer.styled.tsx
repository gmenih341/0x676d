import styled from 'styled-components/macro';
import {SPACER, SPACER_SMALL, SPACER_BIG} from '../../../constants/style.constants';
import {mediaMin, mediaMax} from '../../../utils/style.utils';
import Logo from '../../Logo';
import {Menu} from '../../Menu';
import {Header} from '../../Header';

export const HeaderContainer = styled('header')`
    display: flex;
    position: relative;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    flex-direction: row;
    align-items: center;
    margin: ${SPACER}px 0;

    ${mediaMin('md')} {
        margin: 0 -${SPACER_SMALL}px;
    }

    & > * {
        margin: 0 ${SPACER_SMALL}px;
    }

    ${Logo} {
        flex-basis: 100px;
        flex-shrink: 0;
    }

    ${Header} {
        flex-shrink: 0;
        white-space: nowrap;
    }

    ${Menu} {
        flex-shrink: 1;
        margin-left: auto;

        ${mediaMax('md')} {
            position: absolute;
            top: -${SPACER_BIG}px;
            left: 0;
            width: 100%;
            height: calc(100% + ${SPACER_BIG * 2}px);
            padding: 0 ${SPACER_BIG}px;
        }
    }
`;
