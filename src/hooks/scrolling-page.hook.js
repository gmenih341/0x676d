import {useCallback, useEffect, useState} from 'react';
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
    const keyHandler = useKeyHandler(safelySetPage);

    useEffect(
        () => {
            window.addEventListener(EVENTS.WHEEL, wheelHandler);
            window.addEventListener(EVENTS.KEY_UP, keyHandler);

            return () => {
                window.removeEventListener(EVENTS.WHEEL, wheelHandler);
                window.removeEventListener(EVENTS.KEY_UP, keyHandler);
            };
        },
        [wheelHandler],
    );

    return [page, setPage];
}

function useKeyHandler (callback) {
    return useCallback(
        evt => {
            switch (evt.keyCode) {
                case 38:
                case 37:
                    return callback(-1);
                case 39:
                case 40:
                    return callback(1);
            }
        },
        [callback],
    );
}
