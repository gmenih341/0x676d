import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import {animated} from 'react-spring/hooks';
import {COLOR_BLACK, COLOR_GRAY, SPACER} from '../../style.contants';
import '../../styles/fontello.scss';
import {mediaMin} from '../../utils/style.utils';

const IconItem = ({children, href, type, onClick, ...props}) => (
    <a href={href} title={type} target="_blank" rel="noopener noreferrer" onClick={onClick} {...props}>
        <i className={`icon icon-${type}`} />
        <span>{children}</span>
    </a>
);

const SocialIconsContainer = styled(animated.footer)`
    grid-column: 1 / -1;
    grid-row: -2 / -1;
    margin-top: ${SPACER}px;
    color: ${COLOR_BLACK};
    text-align: center;

    ${mediaMin('sm')} {
        text-align: left;
    }
`;

const Icon = styled(IconItem)`
    height: 100%;
    color: ${COLOR_GRAY[7]};
    text-decoration: none;
    opacity: 0.6;
    will-change: opacity;
    transition: opacity 300ms ease-in;

    &:not(:first-of-type) {
        margin-left: ${SPACER}px;
    }

    &:hover {
        opacity: 1;
    }

    span {
        font-size: 16px;
        display: none;
        vertical-align: baseline;

        ${mediaMin('sm')} {
            display: inline;
        }
    }
    i.icon {
        vertical-align: baseline;
        font-size: 18px;
    }
`;

export const SocialIcons = React.memo(({style, networks}) => {
    return (
        <SocialIconsContainer style={style}>
            {networks.map(network => (
                <Icon key={network.type} type={network.type} href={network.href}>
                    {network.text}
                </Icon>
            ))}
        </SocialIconsContainer>
    );
});

SocialIcons.propTypes = {
    style: PropTypes.object,
    networks: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ),
};

export default SocialIcons;
