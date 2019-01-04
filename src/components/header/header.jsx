import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, {useContext, useEffect, useRef} from 'react';
import {Parallax} from 'react-spring/addons';
import {animated} from 'react-spring/hooks';
import {PageContext} from '../../context/page.context';
import {mediaMin} from '../../utils/style.utils';
import {ParallaxTitle} from './parallax-title';

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
    useEffect(() => parallaxRef.current.updateRaf(), []);
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

export default Header;
