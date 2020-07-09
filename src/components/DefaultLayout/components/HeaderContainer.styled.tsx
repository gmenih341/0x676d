import styled from 'styled-components/macro';
import {mediaMax, mediaMin} from '../../../utils/style.utils';
import {themeSpacer} from '../../../utils/theme.utils';
import {Header} from '../../Header';
import Logo from '../../Logo';
import {Menu} from '../../Menu';

export const HeaderContainer = styled('header')`
    display: flex;
    position: relative;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    flex-direction: row;
    align-items: center;
    margin: ${themeSpacer(6)} 0;

    ${mediaMin('md')} {
        margin: 0 -${themeSpacer(6)};
    }

    & > * {
        margin: 0 ${themeSpacer(6)};
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
            top: ${themeSpacer(9)};
            left: 0;
            width: 100%;
            height: calc(100% + ${themeSpacer(9, 2)});
            padding: 0 ${themeSpacer(9)};
        }
    }
`;
