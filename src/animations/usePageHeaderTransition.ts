import {CSSProperties, FunctionComponent, ReactNode} from 'react';
import {useTransition, UseTransitionResult} from 'react-spring';
import {Direction} from '../types/Direction';
import {HeaderComponentProps, PageComponent} from '../types/PageComponent';

interface EarlyPageHeaderTransitionProps extends CSSProperties {
    x?: number;
}

interface PageHeaderTransitionProps {
    imageProps: CSSProperties;
    contentProps: CSSProperties;
    props: CSSProperties;
    key: any;
    HeaderComponent: FunctionComponent<HeaderComponentProps>;
}

interface RenderCallback {
    (props: PageHeaderTransitionProps, index: number): ReactNode;
}

interface UsePageHeaderTransitionResult {
    (renderCallback: RenderCallback): ReactNode[];
}

const PARALLAX_VELOCITY = 250;

const interpolateHeaderProps = (props: UseTransitionResult<PageComponent, EarlyPageHeaderTransitionProps>): PageHeaderTransitionProps => {
    const {
        item,
        key,
        props: {x, ...restProps},
    } = props;
    return {
        HeaderComponent: item.headerComponent,
        key: key,
        imageProps: {
            transform: x && x.interpolate((xValue: number | undefined = 0) => `translateX(${xValue * -PARALLAX_VELOCITY}px)`),
        },
        contentProps: {
            transform: x && x.interpolate((xValue: number | undefined = 0) => `translateX(${xValue * PARALLAX_VELOCITY}px)`),
        },
        props: restProps,
    };
};

export function usePageHeaderTransition(routeComponent: PageComponent, direction: Direction = 1): UsePageHeaderTransitionResult {
    const transitions = useTransition<PageComponent, EarlyPageHeaderTransitionProps>(
        [routeComponent],
        (item: PageComponent) => item.displayName,
        {
            initial: {
                x: 0,
                width: '100%',
                transform: 'translateX(0)',
            },
            from: {
                x: direction,
                width: '100%',
                transform: `translateX(${direction * 100}%)`,
            },
            enter: {
                x: 0,
                transform: 'translate(0%)',
            },
            leave: {
                x: direction,
                position: 'absolute',
                width: '100%',
                transform: `translate(${direction * -100}%)`,
            },
        },
    );

    return (renderCallback: RenderCallback) => transitions.map(interpolateHeaderProps).map(renderCallback);
}
