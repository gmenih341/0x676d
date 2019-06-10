import {ReactNode, useEffect, useMemo, useState, CSSProperties} from 'react';
import {config, useTransition} from 'react-spring';
import {PageComponent} from '../../interfaces';

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
    const transition = useTransition(contentItems, null, {
        from: {transform: `translateX(${-change}px)`, opacity: 0, p: 0},
        enter: {transform: 'translateX(0)', opacity: 1, p: 1},
        leave: {transform: `translateX(${change}px)`, opacity: 0},
        config: config.gentle,
        onRest: () => {
            setContentItems(pageComponent.contentItems);
        },
    });

    useEffect(() => {
        setContentItems([]);
        setLastIndex(pageComponent.index);
    }, [pageComponent]);

    useEffect(() => {
        setContentItems(pageComponent.contentItems);
    }, []);

    return (callbackFn: CallbackFn) => transition.map(callbackFn);
}
