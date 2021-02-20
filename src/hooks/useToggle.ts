import {useState, useCallback} from 'react';

type ToggleFn = (force?: boolean) => void;

export function useToggle(initialState = false): [boolean, ToggleFn] {
    const [state, setState] = useState(initialState);
    const toggle = useCallback((force: boolean) => setState(undefined === force ? force : !state), [state]);

    return [state, toggle];
}
