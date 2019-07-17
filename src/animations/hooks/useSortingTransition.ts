import {useToggle} from '../../hooks/useToggle';
import {useEffect, useState} from 'react';
import sortBy from 'lodash/sortBy';
import {useTransition, config} from 'react-spring';
import {SPACER} from '../../constants/style.constants';

type CallbackFn = (props: Transition) => ReactNode;
const STEP = 22 + SPACER;

export function useSortingTransition(data: any[]): any {
    const [rows, set] = useState(data);
    const [sorted, toggleSorted] = useToggle(false);

    useEffect(() => {
        if (sorted) {
            set(sortBy(data, ['value']).reverse());
        } else {
            set(sortBy(data, item => data.indexOf(item)));
        }
    }, [sorted]);

    let height = 0;
    const transitions = useTransition(rows.map(data => ({...data, y: (height += STEP) - STEP})), d => d.name, {
        from: {y: 0},
        enter: ({y}) => ({y}),
        update: ({y}) => ({y}),
        config: {
            ...config.wobbly,
            friction: 18,
        },
    });
    height -= SPACER;

    const transition = (callbackFn: CallbackFn) => transitions.map(callbackFn);

    return {
        transition,
        height,
        toggleSorted,
    };
}
