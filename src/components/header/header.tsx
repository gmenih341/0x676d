import styled from '@emotion/styled';
import React, {FunctionComponent, useContext, useEffect, useRef} from 'react';
import {Parallax} from 'react-spring/addons';
import {PageContext} from '../../context/page.context';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {ParallaxTitle} from './parallax-title';

const TitleContainer = styled.div`
    position: relative;
    text-align: center;
    grid-area: header;

    ${mediaMin(ScreenSize.SM)} {
        text-align: left;
    }
`;
export const Header: FunctionComponent = () => {
    const {page, pages} = useContext(PageContext);
    const parallaxRef = useRef<Parallax>(null);
    useEffect(
        () => {
            if (parallaxRef.current) {
                parallaxRef.current.scrollTo(page);
            }
        },
        [page],
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
};

export default Header;
