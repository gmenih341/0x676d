import {INetwork} from '*/assets/networks.json5';
import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {animated} from 'react-spring';
import {COLOR_BLACK, SPACER} from '../../style.contants';
import '../../styles/fontello.scss';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {IconItem} from './icon-item';

const SocialIconsContainer = styled(animated.footer)`
    grid-column: 1 / -1;
    grid-row: -2 / -1;
    margin-top: ${SPACER}px;
    color: ${COLOR_BLACK};
    text-align: center;

    ${mediaMin(ScreenSize.SM)} {
        text-align: left;
    }
`;

export interface ISocialIconsProps {
    networks: INetwork[];
}

export const SocialIcons: FunctionComponent<ISocialIconsProps> = React.memo(({networks}) => {
    return (
        <SocialIconsContainer>
            {networks.map(network => (
                <IconItem key={network.type} type={network.type} href={network.href}>
                    {network.text}
                </IconItem>
            ))}
        </SocialIconsContainer>
    );
});

export default SocialIcons;
