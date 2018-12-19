import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Parallax, ParallaxLayer} from 'react-spring/addons';
import {COLOR_BLACK, COLOR_WHITE, SPACER} from '../../style.contants';

const TerminalContainer = styled.main`
    position: relative;
    height: 100%;
    width: 100%;
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    overflow: hidden;
    font-family: Fira Mono, 'Courier New', Courier, monospace;
    box-sizing: border-box;
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const TerminalContent = styled.div`
    padding: ${SPACER}px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export function Terminal ({activePage, pages}) {
    const parallaxRef = useRef();
    useEffect(
        () => {
            parallaxRef.current.scrollTo(activePage);
        },
        [activePage],
    );
    return (
        <TerminalContainer>
            <Parallax ref={parallaxRef} pages={pages.length} scrolling={false} config={{tension: 210, friction: 30}}>
                {pages.map((page, i) => (
                    <ParallaxLayer key={i} offset={i}>
                        <TerminalContent>{page.title}</TerminalContent>
                    </ParallaxLayer>
                ))}
            </Parallax>
        </TerminalContainer>
    );
}

Terminal.propTypes = {
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
