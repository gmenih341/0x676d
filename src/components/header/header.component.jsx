import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Parallax} from 'react-spring/addons';
import {ParallaxTitle} from './parallax-title.component';
import {mediaMin} from '../../utils/style.utils';

const TitleContainer = styled.div`
    position: relative;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    text-align: center;

    ${mediaMin('sm')} {
        text-align: left;
        grid-column: 2 / 3;
        grid-row: 1 / 3;
    }
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
        <TitleContainer>
            <Parallax ref={parallaxRef} pages={pages.length} scrolling={false} config={{tension: 210, friction: 20}}>
                {pages.map((page, i) => (
                    <ParallaxTitle key={page.title} title={page.title} description={page.description} offset={i} />
                ))}
            </Parallax>
        </TitleContainer>
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
