import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Parallax} from 'react-spring/addons';
import {Logo} from './logo.component';
import {ParallaxTitle} from './parallax-title.component';
import {SPACER_BIG} from '../../style.contants';

const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: 150px 1fr;
    align-items: start;
    grid-gap: 0 ${SPACER_BIG}px;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-row: 1 / 2;
    align-self: stretch;
`;

const TitleContainer = styled.div`
    align-self: stretch;
    position: relative;
`;

export function Header ({activePage, pages}) {
    const parallaxRef = useRef();
    useEffect(
        () => {
            parallaxRef.current.scrollTo(activePage);
        },
        [activePage],
    );
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <TitleContainer>
                <Parallax ref={parallaxRef} pages={pages.length} scrolling={false} config={{tension: 210, friction: 20}}>
                    {pages.map((page, i) => (
                        <ParallaxTitle key={page.title} title={page.title} description={page.description} offset={i} />
                    ))}
                </Parallax>
            </TitleContainer>
        </HeaderContainer>
    );
}

Header.propTypes = {
    activePage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            browserTitle: PropTypes.string.isRequired,
        }),
    ),
};
