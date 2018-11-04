import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from '../../components/logo/logo.component';
import {PageTitle} from '../../components/page-title/page-title.component';
import {useRefHeight} from './ref-height.hook';
import {useScrollToActive} from './scroll-active.hook';
import * as css from './header.style';

export function HeaderContainer (props) {
    const {pages, activePage} = props;
    const [height, scrollableRef] = useRefHeight();
    const titles = pages.map((page, i) => <PageTitle key={`title-${i}`} active={activePage === i} {...page} />);

    useScrollToActive(activePage, height, scrollableRef);

    return (
        <header className={css.header}>
            <div className={css.titles}>
                <div className={css.logo}>
                    <Logo />
                </div>
                <div className={css.scrollable} ref={scrollableRef} style={{height}}>
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
