import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {Logo} from '../../components/logo/logo.component';
import {PageTitle} from '../../components/page-title/page-title.component';
import './header.container.scss';
import {scrollSmoothly, EasingFunctions} from '../../utils/animation.utils';

const DEFAULT_HEIGHT = 177;

export function HeaderContainer(props) {
    const {pages, activePage} = props;
    const [height, scrollableRef] = useFirstChildHeight();
    const titles = pages.map((page, i) => <PageTitle key={`title-${i}`} active={activePage === i} {...page} />);
    useScrollToActive(activePage, height, scrollableRef);

    return (
        <header className="container-fluid header">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-11 col-lg-9">
                    <div className="title-wrapper">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="scrollable" ref={scrollableRef} style={{height}}>
                            {titles}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

HeaderContainer.propTypes = {
    activePage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.object),
};

function useFirstChildHeight() {
    const scrollableRef = useRef();
    const [height, setHeight] = useState(DEFAULT_HEIGHT);

    useEffect(() => {
        setHeight(scrollableRef.current.firstChild.clientHeight);
    });

    return [height, scrollableRef];
}

function useScrollToActive(activePage, height, ref) {
    useEffect(
        () => {
            scrollSmoothly(ref.current, height * activePage, {
                transitionTime: 250,
                ease: EasingFunctions.easeOutQuad,
            });
        },
        [activePage],
    );
}
