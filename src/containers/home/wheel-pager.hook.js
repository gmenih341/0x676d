import {useLayoutEffect, useState} from 'react';
import {debounce} from '../../utils/function.utils';

const SCROLL_BREAKPOINT = 10;

export function useWheelPager (maxPage) {
    const [stateActivePage, setActivePage] = useState(0);
    let activePage = 0;
    let sumScroll = 0;
    let breakpointModifier = 1;

    const onWheelEnd = debounce(() => {
        sumScroll = 0;
        breakpointModifier = 1;
    }, 77);

    const wheelHandler = event => {
        const {deltaY} = event;
        sumScroll += deltaY;

        if (Math.abs(sumScroll) > SCROLL_BREAKPOINT * breakpointModifier) {
            const nextPage = sumScroll > 0 ? activePage + 1 : activePage - 1;
            sumScroll = 0;
            breakpointModifier += 200;
            if (nextPage >= 0 && nextPage < maxPage) {
                activePage = nextPage;
                setActivePage(nextPage);
            }
        }
        onWheelEnd();
    };

    useLayoutEffect(() => {
        window.addEventListener('wheel', wheelHandler);
        return () => {
            window.removeEventListener('wheel', wheelHandler);
        };
    }, []);

    return stateActivePage;
}
