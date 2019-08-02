import {Direction} from '../types/Direction';
import {useMemo, useState} from 'react';

export function useIndexDirection(index: number): Direction {
    const [lastIndex, setLastIndex] = useState(2);

    return useMemo(() => {
        const direction = lastIndex > index ? -1 : 1;
        setLastIndex(index);

        return direction;
    }, [index]);
}
