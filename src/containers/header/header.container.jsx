import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from '../../components/logo/logo.component';
import {PageTitle} from '../../components/page-title/page-title.component';
import {useRefHeight} from './ref-height.hook';
import {Container} from './styled/container.styled';
import {Headings} from './styled/headings.styled';
import {LogoContainer} from './styled/logo-container.styled';
import {useSpring, animated} from 'react-spring';
import {easeCubicIn} from 'd3-ease';

export function HeaderContainer (props) {
    const {pages, activePage} = props;
    const [height, scrollableRef] = useRefHeight();
    const [springStyle] = useSpring({
        scrollTop: height * activePage,
        from: {scrollTop: 0},
        config: {duration: 150, ease: easeCubicIn},
    });

    return (
        <Container>
            <Headings>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <animated.div style={{overflow: 'hidden', height}} ref={scrollableRef} {...springStyle}>
                    {pages.map((page, i) => (
                        <PageTitle key={`title-${i}`} active={activePage === i} {...page} />
                    ))}
                </animated.div>
            </Headings>
        </Container>
    );
}

HeaderContainer.propTypes = {
    activePage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.object),
};
