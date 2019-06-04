import {useEffect, useRef, useState} from 'react';
import {config, ReactSpringHook, useChain, useTransition, useSpring} from 'react-spring';
import {PageComponent} from '../../interfaces';

export function useMainContentTransition(routeComponent: PageComponent): any {
    const [i, setI] = useState(0);
    const [open, setOpen] = useState(true);
    const springRef = useRef<ReactSpringHook>(null);
    const transitionRef = useRef<ReactSpringHook>(null);
    const {transform} = useSpring({
        ref: springRef,
        config: config.stiff,
        from: {transform: 'scale(1)'},
        to: {transform: 'scale(1.1)'},
        reverse: !open,
    });
    const transition = useTransition([routeComponent], () => routeComponent.displayName, {
        ref: transitionRef,
        from: {transform: `translateX(${i > routeComponent.index ? -100 : 100}%)`},
        enter: {transform: `translateX(0%)`},
        leave: {transform: `translateX(${i > routeComponent.index ? 100 : -100}%)`, position: 'absolute', width: '100%'},
        config: config.stiff,
        onRest() {
            setOpen(false);
        },
    });

    useEffect(() => {
        setOpen(true);
        setI(routeComponent.index);
    }, [routeComponent]);

    useChain([springRef, transitionRef, springRef], [0, 0.5, 0.75]);

    return [transform, callback => transition.map(callback)];
}
