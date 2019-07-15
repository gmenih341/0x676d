import {CSSProperties, ReactNode, useEffect, useMemo, useState} from 'react';
import {config, useTransition} from 'react-spring';
import {PageComponent} from '../../types/PageComponent';

interface TransitionProps extends CSSProperties {
    imageStyle: CSSProperties;
    contentStyle: CSSProperties;
}
interface Transition {
    props: TransitionProps;
    item: PageComponent;
    key: any;
}

type CallbackFn = (props: Transition) => ReactNode;

export function usePageHeaderTransition(routeComponent: PageComponent): (fn: CallbackFn) => ReactNode {
    const firstIndex = useMemo(() => routeComponent.index, []);
    const [lastIndex, setLastIndex] = useState(firstIndex);
    const transition = useTransition([routeComponent], (item: PageComponent) => item.displayName, {
        from: {x: lastIndex > routeComponent.index ? -1 : 1, width: '100%'},
        enter: {x: 0},
        leave: {x: lastIndex > routeComponent.index ? 1 : -1, position: 'absolute', width: '100%'},
        config: config.stiff,
    });

    useEffect(() => {
        setLastIndex(routeComponent.index);
    }, [routeComponent]);

    return (callbackFn: CallbackFn) =>
        transition.map(({props: {x, ...restProps}, item, key}) =>
            callbackFn({
                item,
                key,
                props: {
                    imageStyle: {
                        transform: x.interpolate(y => `translateX(0px)`),
                    },
                    contentStyle: {
                        transform: x.interpolate(y => `translateX(${y * 860}px)`),
                    },
                    transform: x.interpolate(y => `translateX(${y * 100}%)`),
                    ...restProps,
                },
            }),
        );
}
