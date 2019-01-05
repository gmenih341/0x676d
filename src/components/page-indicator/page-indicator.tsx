import styled from '@emotion/styled';
import React, {FunctionComponent, useContext, useMemo} from 'react';
import {animated} from 'react-spring';
import {useSpring} from 'react-spring/hooks';
import {PageContext} from '../../context/page.context';
import {COLOR_MAIN, SPACER_SMALL} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

const PATHS = {
    UP: 'M0 64L64 64L128 64L62.02 0L0 64Z',
    ACTIVE: 'M0 64L64 128L128 64L62.02 0L0 64Z',
    DOWN: 'M0 64L64 128L128 64L64 64L0 64Z',
};

const PagesContainer = styled.div`
    grid-row: 1 / 3;
    grid-column: -2 / -1;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 10;

    ${mediaMin(ScreenSize.SM)} {
        grid-column: 2 / 3;
    }

    svg {
        width: 20px;
        margin: ${SPACER_SMALL}px auto;
        height: auto;
        cursor: pointer;
    }
`;

interface IIndicatorProps {
    index: number;
    activePage: number;
    indicatorClicked: (...args: any[]) => any;
}

const Indicator: FunctionComponent<IIndicatorProps> = React.memo(({index, activePage, indicatorClicked}) => {
    const path = index === activePage ? PATHS.ACTIVE : index > activePage ? PATHS.DOWN : PATHS.UP;
    const spring = useSpring({
        path: path,
        config: {tension: 210, friction: 20},
    });
    return (
        <svg viewBox="-1 -1 132 132" onClick={() => indicatorClicked(index)}>
            <animated.path fill={COLOR_MAIN[4 + index]} d={spring.path} />
        </svg>
    );
});

export const PageIndicator: FunctionComponent = () => {
    const {page, pages, setPage} = useContext(PageContext);
    const indicators = useMemo(
        () =>
            Array(pages.length)
                .fill(0)
                .map((_, i) => <Indicator key={i} index={i} activePage={page} indicatorClicked={setPage} />),
        [page],
    );
    return <PagesContainer>{indicators}</PagesContainer>;
}

export default PageIndicator;
