import {useState, useEffect, useCallback} from 'react';
import {useScrollingAverage} from './scrolling-average.hook';

const EVENTS = {
    WHEEL: 'wheel',
    KEY_UP: 'keyup',
    TOUCH_START: 'touchstart',
    TOUCH_END: 'touchend',
};

export function useScrollingPage (pages, options) {
    const [page, setPage] = useState(0);
    const safelySetPage = useCallback(
        direction => {
            if (page + direction >= 0 && page + direction < pages) {
                setPage(page + direction);
            }
        },
        [page],
    );
    const wheelHandler = useScrollingAverage(safelySetPage, options);

    useEffect(
        () => {
            window.addEventListener(EVENTS.WHEEL, wheelHandler);

            return () => window.removeEventListener(EVENTS.WHEEL, wheelHandler);
        },
        [wheelHandler],
    );

    return page;
}
