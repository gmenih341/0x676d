import styled from '@emotion/styled';
import {SPACER} from '../../../styles/variables';
import {mediaMin} from '../../../utils/style.utils';

export const LogoContainer = styled('div')`
    display: block;
    height: 100px;
    width: 200px;
    margin: ${SPACER}px 0 0 0;

    svg {
        width: 90%;
        max-height: 100%;
        margin: 5%;
    }

    ${mediaMin('sm')} {
        height: 100%;
        min-height: 180px;
        background-size: auto 60%;
        margin: 0;
        margin-right: ${SPACER}px;
        svg {
            width: 70%;
            margin: 15%;
        }
    }
`;
