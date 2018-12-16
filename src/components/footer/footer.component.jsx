import React from 'react';
import styled from '@emotion/styled';
import {COLOR_BLACK} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';

const IconItem = ({children, href, icon, ...props}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        <i>{icon}</i>
        <span>{children}</span>
    </a>
);

const FooterContainer = styled.footer`
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    text-align: center;
    color: ${COLOR_BLACK};
`;

const Icon = styled(IconItem)`
    color: inherit;
    text-decoration: none;

    span {
        display: none;

        ${mediaMin('md')} {
            display: inline;
        }
    }
`;

export function Footer () {
    return (
        <FooterContainer>
            <Icon icon="github" href="https://github.com/gmenih341">
                gmenih341
            </Icon>
            <Icon icon="linkedin" href="https://linkedin.com/in/gregor-menih">
                gregor-menih
            </Icon>
            <Icon icon="email" href="mailto:gregor@menih.si">
                gregor@menih.si
            </Icon>
        </FooterContainer>
    );
}
