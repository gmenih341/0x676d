import {useState, useMemo, useCallback} from 'react';

const defaultSettings = {
    stability: 8,
    sensitivity: 100,
    tolerance: 1.1,
    delay: 150,
    duration: 300,
};

/** @param {Function} callback */
export function useScrollingAverage (callback, options = defaultSettings) {
    const {stability, sensitivity, tolerance, delay, duration} = {...defaultSettings, ...options};

    const [lastChange, setLastChange] = useState(null);
    const nextDeltas = useMemo(() => Array(stability * 2).fill(null), [stability]);
    const prevDeltas = useMemo(() => Array(stability * 2).fill(null), [stability]);
    const timestampDeltas = useMemo(() => Array(stability * 2).fill(null), [stability]);
    const wrappedCallback = useCallback(
        direction => {
            if (lastChange === null || lastChange + duration < Date.now()) {
                setLastChange(Date.now());
                callback(direction);
            }
        },
        [callback, duration],
    );

    const shouldSwitch = useCallback(
        direction => {
            const deltas = direction === -1 ? prevDeltas : nextDeltas;
            if (deltas[0] === null) {
                return true;
            } else if (!(timestampDeltas[2 * stability - 2] + delay > Date.now() && deltas[0] === deltas[2 * stability - 1])) {
                const lowAvg = deltas.slice(0, stability).reduce((a, b, i, {length}) => (i !== length - 1 ? a + b : (a + b) / length));
                const highAvg = deltas
                    .slice(stability, stability * 2)
                    .reduce((a, b, i, {length}) => (i !== length - 1 ? a + b : (a + b) / length));
                return Math.abs(lowAvg) < Math.abs(highAvg * tolerance) && sensitivity < Math.abs(highAvg);
            }
            return false;
        },
        [stability, tolerance, delay, sensitivity],
    );

    return useCallback(
        evt => {
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
        [callback, nextDeltas, prevDeltas, timestampDeltas],
    );
}
