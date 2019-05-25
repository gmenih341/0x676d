import {useTransition} from 'react-spring';

type KeyFn = Parameters<typeof useTransition>[1];

export const useFadeInOut = (component: any, keyFn: KeyFn, length: number) => {
    return useTransition(component, keyFn, {
        from: {opacity: 0, transform: `translateY(${length}px)`},
        enter: {opacity: 1, transform: 'translateY(0px)'},
        leave: {opacity: 0, transform: `translateY(${-length}px)`, position: 'absolute'},
        // config: {duration: 1500},
    });
};
