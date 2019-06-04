import {ReactNode, useEffect, useMemo, useState} from 'react';
import {config, ReactSpringHook, useChain, useTransition, useSpring} from 'react-spring';
import {PageComponent} from '../../interfaces';

// interface TransitionProps<T> {
//     props: any;
//     key: any;
//     item: T;
// }
// type TransitionCallback<T> = (props: TransitionProps<T>) => ReactNode[];
// type TransitionFunction<T> = (callback: TransitionCallback) => TransitionCallback<T>;

export function useMainContentTransition(routeComponent: PageComponent): any {
    const [i, setI] = useState(0);
    const [s, setS] = useState(true);
    const parent = useSpring({
        x: 1,
    });

    const unitDiff = useMemo(() => {
        const pageDiff = routeComponent.index - i;
        return pageDiff / Math.abs(pageDiff);
    }, [routeComponent]);
    const transition: ReactSpringHook = useTransition([routeComponent], () => routeComponent.displayName, {
        from: {x: 1},
        enter: {x: 0, position: 'static'},
        leave: {x: -1, position: 'absolute', width: '100%'},
        unique: true,
        reset: true,
    });

    const callbackFn = (callback: any) =>
        transition.map(({props: {x, ...props}, item, key}) =>
            callback({
                props: {
                    transform: x
                        .interpolate({
                            range: [0, 0.25, 0.5, 0.75, 1],
                            output: [0, 3, 4, 50, 100],
                        })
                        .interpolate(x => `translateX(${x * unitDiff}%)`),
                    ...props,
                },
                item,
                key,
            }),
        );

    useEffect(() => {
        setI(routeComponent.index);
    }, [routeComponent]);

    return [
        {
            transform: parent.x
                .interpolate({
                    range: [0, 0.5, 1],
                    output: [0],
                })
                .interpolate(x => `translateX(${x}px)`),
        },
        callbackFn,
    ];
}
