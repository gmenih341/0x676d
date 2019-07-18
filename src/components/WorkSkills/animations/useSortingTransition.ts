import {ReactNode, useState} from 'react';
import {useTransition, UseTransitionResult} from 'react-spring';

interface SortData {
    y: number;
}

type KeysFn = Parameters<typeof useTransition>[1];
type CallbackFn = any;
type ReactSetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;

export function useSortingTransition<T>(data: T[], step: number, keys: KeysFn): [TransitionFn<T, SortData>, ReactSetStateFn<T[]>] {
    type MergedData = T & SortData;
    const [rows, setData] = useState(data);

    let height = 0;
    const transitions = useTransition<MergedData, SortData>(
        rows.map((data: T): MergedData => ({...data, y: (height += step) - step})),
        keys,
        {
            y: 0,
            enter: (item: MergedData): SortData => ({y: item.y}),
            update: (item: MergedData): SortData => ({y: item.y}),
        },
    );

    const transition = (callback: CallbackFn) =>
        transitions.map(({props: {y}, item, key}, index) =>
            callback(
                {
                    item,
                    key,
                    props: {zIndex: data.length - index, transform: y.interpolate(y => `translate3d(0,${y}px,0)`)},
                },
                index,
            ),
        );

    return [transition, setData];
}
