import {useCallback, useEffect, useState, DOMAttributes, Dispatch, SetStateAction, KeyboardEvent} from 'react';
import {useScrollingAverage, IScrollingSettings} from './scrolling-average.hook';
import {PageChangeCallback, Direction} from './wheel-page.types';

enum Events {
    Wheel = 'wheel',
    KeyUp = 'keyup',
    TouchStart = 'touchstart',
    TouchEnd = 'touchend',
}

export function useScrollingPage (pages: number, options: Partial<IScrollingSettings>): [number, Dispatch<SetStateAction<number>>] {
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
            window.addEventListener(Events.Wheel, wheelHandler);

            return () => {
                window.removeEventListener(Events.Wheel, wheelHandler);
            };
        },
        [page],
    );

    return [page, setPage];
}

function useKeyHandler (callback: PageChangeCallback): DOMAttributes<any>['onKeyDown'] {
    return useCallback(
        (evt: KeyboardEvent<any>) => {
            switch (evt.keyCode) {
                case 38:
                case 37:
                    return callback(Direction.Up);
                case 39:
                case 40:
                    return callback(Direction.Down);
            }
        },
        [callback],
    );
}
