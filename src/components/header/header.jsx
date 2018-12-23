import React, {useRef, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Parallax} from 'react-spring/addons';
import {animated} from 'react-spring/hooks';
import {ParallaxTitle} from './parallax-title';
import {mediaMin} from '../../utils/style.utils';
import {PageContext} from '../../context/page.context';

const TitleContainer = styled(animated.div)`
    position: relative;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    text-align: center;

    ${mediaMin('sm')} {
        text-align: left;
        grid-column: 3 / -1;
        grid-row: 1 / 3;
    }
`;

export function Header ({style}) {
    const {page, pages} = useContext(PageContext);
    const parallaxRef = useRef();
    useEffect(
        () => {
            parallaxRef.current.scrollTo(page);
        },
        [page],
    );
    return (
        <TitleContainer style={style}>
            <Parallax ref={parallaxRef} pages={pages.length} scrolling={false} config={{tension: 210, friction: 20}}>
                {pages.map((page, i) => (
                    <ParallaxTitle key={page.title} title={page.title} description={page.description} offset={i} />
                ))}
            </Parallax>
        </TitleContainer>
    );
}

Header.propTypes = {
    style: PropTypes.object,
};
