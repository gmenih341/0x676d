import {CSSProperties, ReactNode} from 'react';
import {useTransition, UseTransitionResult} from 'react-spring';
import {Direction} from '../types/Direction';
import {PageComponent} from '../types/PageComponent';

interface EarlyPageHeaderTransitionProps extends CSSProperties {
    x?: number;
}

interface PageHeaderTransitionProps {
    props: CSSProperties;
    key: any;
    PageComponent: PageComponent;
}

interface RenderCallback {
    (props: PageHeaderTransitionProps, index: number): ReactNode;
}

interface UsePageHeaderTransitionResult {
    (renderCallback: RenderCallback): ReactNode[];
}

const interpolateHeaderProps = (props: UseTransitionResult<PageComponent, EarlyPageHeaderTransitionProps>): PageHeaderTransitionProps => {
    const {
        item,
        key,
        props: {x, ...restProps},
    } = props;

    return {
        PageComponent: item,
        key: key,
        props: restProps,
    };
};

export function usePageContentTransition(routeComponent: PageComponent, direction: Direction = 1): UsePageHeaderTransitionResult {
    const pageTransition = useTransition<PageComponent, EarlyPageHeaderTransitionProps>(
        [routeComponent],
        (item: PageComponent) => item.displayName,
        {
            initial: {
                x: 0,
                width: '100%',
                transform: `translateX(0%)`,
            },
            from: {
                x: direction,
                width: '100%',
                transform: `translateX(${direction * 104}%)`,
            },
            enter: {
                x: 0,
                transform: 'translateX(0%)',
            },
            leave: {
                x: direction,
                position: 'absolute',
                width: '100%',
                transform: `translateX(${direction * -104}%)`,
            },
        },
    );

    return (renderCallback: RenderCallback) => pageTransition.map(interpolateHeaderProps).map(renderCallback);
}
