import {useCallback, useMemo} from 'react';
import {Direction, PageChangeCallback} from './wheel-page.types';

export interface IScrollingSettings {
    stability: number,
    sensitivity: number,
    tolerance: number,
    delay: number,
    duration: number,
}

type ShouldChangeCallback = (direction: Direction) => boolean;

const defaultSettings: IScrollingSettings = {
    stability: 8,
    sensitivity: 100,
    tolerance: 1.1,
    delay: 150,
    duration: 200,
};

export function useScrollingAverage (callback: PageChangeCallback, options: Partial<IScrollingSettings> = defaultSettings)  {
    const {stability, sensitivity, tolerance, delay, duration} = {...defaultSettings, ...options};

    const nextDeltas = useMemoArray(stability * 2, 0);
    const prevDeltas = useMemoArray(stability * 2, 0);
    const timestampDeltas = useMemoArray(stability * 2, 0);
    const lastDelta: number = useMemo(() => Date.now(), [callback]);

    const wrappedCallback = useCallback<PageChangeCallback>(
        direction => {
            if (lastDelta + duration < Date.now()) {
                callback(direction);
            }
        },
        [lastDelta],
    );

    const shouldSwitch = useCallback<ShouldChangeCallback>(direction => {
        const deltas = direction === Direction.Up ? prevDeltas : nextDeltas;
        if (deltas[0] === null) {
            return true;
        } else if (!(timestampDeltas[2 * stability - 2] + delay > Date.now() && deltas[0] === deltas[2 * stability - 1])) {
            const lowAvg = reduceArrayAverage(deltas.slice(0, stability));
            const highAvg = reduceArrayAverage(deltas.slice(stability, stability * 2));
            return Math.abs(lowAvg) < Math.abs(highAvg * tolerance) && sensitivity < Math.abs(highAvg);
        }
        return false;
    }, []);

    return useCallback(
        (evt: WheelEvent) => {
            evt.preventDefault();
            const deltaY = evt.wheelDelta ? evt.wheelDelta * -1 : (evt.deltaY || evt.detail) * 40;
            timestampDeltas.push(Date.now());
            timestampDeltas.shift();
            if (deltaY > 0) {
                nextDeltas.push(deltaY);
                nextDeltas.shift();
                return shouldSwitch(1) && wrappedCallback(1);
            } else {
                prevDeltas.push(deltaY);
                prevDeltas.shift();
                return shouldSwitch(-1) && wrappedCallback(-1);
            }
        },
        [wrappedCallback],
    );
}

function useMemoArray<T> (size: number, initial: T): T[] {
    return useMemo((): T[] => Array<T>(size).fill(initial), [])
}

function reduceArrayAverage (array: number[]): number {
    return array.reduce((previous, current, index, {length}) => (index !== length - 1 ? previous + current : (previous + current) / length));
}