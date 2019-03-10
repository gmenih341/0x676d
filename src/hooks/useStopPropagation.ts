import {useCallback} from 'react';

export function useStopPropagation<T extends React.MouseEvent<HTMLElement>>() {
    return useCallback((event: T) => event.stopPropagation(), []);
}
