import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from '../../components/logo/logo.component';
import {PageTitle} from '../../components/page-title/page-title.component';
import {useRefHeight} from './ref-height.hook';
import {useScrollToActive} from './scroll-active.hook';

// assets
import './header.container.scss';

export function HeaderContainer (props) {
    const {pages, activePage} = props;
    const [height, scrollableRef] = useRefHeight();
    const titles = pages.map((page, i) => <PageTitle key={`title-${i}`} active={activePage === i} {...page} />);

    useScrollToActive(activePage, height, scrollableRef);

    return (
        <header className="container-fluid header">
            <div className="title-wrapper">
                <div className="logo">
                    <Logo />
                </div>
                <div className="scrollable" ref={scrollableRef} style={{height}}>
                    {titles}
                </div>
            </div>
        </header>
    );
}

HeaderContainer.propTypes = {
    activePage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.object),
};
