import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from '../../components/logo/logo.component';
import {PageTitle} from '../../components/page-title/page-title.component';
import {useRefHeight} from './ref-height.hook';
import {useScrollToActive} from './scroll-active.hook';
import {Container} from './styled/container.styled';
import {Headings} from './styled/headings.styled';
import {LogoContainer} from './styled/logo-container.styled';
import {Scrollable} from './styled/scrollable.styled';

export function HeaderContainer (props) {
    const {pages, activePage} = props;
    const [height, scrollableRef] = useRefHeight();
    const titles = pages.map((page, i) => <PageTitle key={`title-${i}`} active={activePage === i} {...page} />);

    useScrollToActive(activePage, height, scrollableRef);

    return (
        <Container>
            <Headings>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <Scrollable ref={scrollableRef} height={height}>
                    {titles}
                </Scrollable>
            </Headings>
        </Container>
    );
}

HeaderContainer.propTypes = {
    activePage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.object),
};
