import {Direction} from '../types/Direction';
import {useMemo, useState, useEffect} from 'react';

export function useIndexDirection(index: number): Direction {
    const [lastIndex, setLastIndex] = useState(0);

    useEffect(() => {
        console.log('setting to ', index);
        setLastIndex(() => index);
    }, []);

    return useMemo(() => {
        const direction = lastIndex > index ? -1 : 1;

        console.log('setting to ', index, direction, lastIndex);
        setLastIndex(index);

        return direction;
    }, [index]);
}
