import {CSSProperties, ReactNode, useEffect, useMemo, useState} from 'react';
import {config, useTransition} from 'react-spring';
import {PageComponent} from '../../../interfaces';

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

export function usePageContentTransition(pageComponent: PageComponent): (fn: CallbackFn) => ReactNode {
    const [contentItems, setContentItems] = useState<ReactNode[]>([]);
    const firstIndex = useMemo(() => pageComponent.index, []);
    const [lastIndex, setLastIndex] = useState(firstIndex);
    const change = useMemo(() => (lastIndex > pageComponent.index ? -10 : 10), [pageComponent]);
    const what = useMemo(() => Math.random(), [pageComponent]);
    const transition = useTransition(contentItems, (_: any, i: number): number => i + what, {
        from: {transform: `translateX(${-change}px)`, opacity: 0, p: 0},
        enter: {transform: 'translateX(0)', opacity: 1, p: 1},
        leave: {transform: `translateX(${change}px)`, opacity: 0, position: 'absolute'},
        trail: 100,
        config: config.gentle,
    });

    useEffect(() => {
        setContentItems([]);
        setLastIndex(pageComponent.index);

        const timeout = setTimeout(() => {
            setContentItems(pageComponent.contentItems);
        }, 400);

        return () => clearTimeout(timeout);
    }, [pageComponent]);

    useEffect(() => {
        setTimeout(() => {
            setContentItems(pageComponent.contentItems);
        }, 150);
    }, []);

    return (callbackFn: CallbackFn) => transition.map(callbackFn);
}
