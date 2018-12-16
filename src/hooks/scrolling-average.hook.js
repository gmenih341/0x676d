const defaultSettings = {
    stability: 8,
    sensitivity: 100,
    tolerance: 1.1,
    delay: 150,
};

/** @param {Function} callback */
export function useScrollingAverage (callback, options = defaultSettings) {
    const {stability, sensitivity, tolerance, delay} = {...defaultSettings, ...options};
    const nextDeltas = Array(stability * 2).fill(null);
    const prevDeltas = Array(stability * 2).fill(null);
    const timestampDeltas = Array(stability * 2).fill(null);

    const getBrowserAgnosticDeltaY = evt => (evt.wheelDelta ? evt.wheelDelta * -1 : (evt.deltaY || evt.detail) * 40);

    const shouldSwitch = direction => {
        const deltas = direction === -1 ? prevDeltas : nextDeltas;
        if (deltas[0] !== null && timestampDeltas[2 * stability - 1] + delay > Date.now()) {
            const lowAvg = deltas.slice(0, stability).reduce((a, b, i, {length}) => (i < length - 1 ? a + b : (a + b) / length));
            const highAvg = deltas
                .slice(stability, stability * 2)
                .reduce((a, b, i, {length}) => (i < length - 1 ? a + b : (a + b) / length));
            return Math.abs(lowAvg) < Math.abs(highAvg * tolerance) && sensitivity < Math.abs(highAvg);
        }
        return false;
    };

    /** @param {WheelEvent} evt */
    const wheelHandler = evt => {
        evt.preventDefault();
        const deltaY = getBrowserAgnosticDeltaY(evt);
        timestampDeltas.push(Date.now());
        timestampDeltas.shift();
        if (deltaY > 0) {
            nextDeltas.push(deltaY);
            nextDeltas.shift();
            return shouldSwitch(1) && callback(1);
        } else {
            prevDeltas.push(deltaY);
            prevDeltas.shift();
            return shouldSwitch(-1) && callback(-1);
        }
    };

    return wheelHandler;
}
