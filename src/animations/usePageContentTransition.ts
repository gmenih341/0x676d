import {CSSProperties, ReactNode, FC} from 'react';
import {useTransition, UseTransitionResult} from 'react-spring';
import {Direction} from '../types/Direction';
import {PageComponent, ContentComponentProps} from '../types/PageComponent';

interface EarlyPageHeaderTransitionProps extends CSSProperties {
    x?: number;
}

interface PageHeaderTransitionProps {
    props: CSSProperties;
    key: any;
    PageComponent: FC<ContentComponentProps>;
}

interface RenderCallback {
    (props: PageHeaderTransitionProps, index: number): ReactNode;
}

interface UsePageHeaderTransitionResult {
    (renderCallback: RenderCallback): ReactNode[];
}

const interpolateHeaderProps = (
    props: UseTransitionResult<FC<ContentComponentProps>, EarlyPageHeaderTransitionProps>,
): PageHeaderTransitionProps => {
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

export function usePageContentTransition(
    routeComponent: FC<ContentComponentProps>,
    index: number,
    direction: Direction,
): UsePageHeaderTransitionResult {
    const pageTransition = useTransition<FC<ContentComponentProps>, EarlyPageHeaderTransitionProps>([routeComponent], () => index, {
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
    });

    return (renderCallback: RenderCallback) => pageTransition.map(interpolateHeaderProps).map(renderCallback);
}
