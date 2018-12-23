import React from 'react';
import styled from '@emotion/styled';
import {animated} from 'react-spring/hooks';
import {COLOR_BLACK, SPACER, COLOR_GRAY} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import '../../styles/fontello.scss';

const IconItem = ({children, href, type, ...props}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        <i className={`icon icon-${type}`} />
        <span>{children}</span>
    </a>
);

const FooterContainer = styled(animated.div)`
    grid-column: 1 / -1;
    grid-row: -2 / -1;
    margin-top: ${SPACER}px;
    color: ${COLOR_BLACK};
    text-align: center;
`;

const Icon = styled(IconItem)`
    height: 100%;
    margin: 0 ${SPACER}px;
    color: ${COLOR_GRAY[7]};
    text-decoration: none;
    opacity: 0.6;
    will-change: opacity;
    transition: opacity 300ms ease-in;

    &:hover {
        opacity: 1;
    }

    span {
        font-size: 16px;
        display: none;
        vertical-align: baseline;

        ${mediaMin('md')} {
            display: inline;
        }
    }
    i.icon {
        vertical-align: baseline;
        font-size: 18px;
    }
`;

export const Footer = React.memo(({style}) => {
    return (
        <FooterContainer style={style}>
            <Icon type="github" href="https://github.com/gmenih341">
                gmenih341
            </Icon>
            <Icon type="email" href="mailto:gregor@menih.si">
                gregor@menih.si
            </Icon>
            <Icon type="linkedin" href="https://linkedin.com/in/gregor-menih">
                gregor-menih
            </Icon>
        </FooterContainer>
    );
});
