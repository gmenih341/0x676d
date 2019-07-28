import {CSSProperties, FunctionComponent, ReactNode} from 'react';
import {config, useTransition, UseTransitionResult} from 'react-spring';
import {HeaderComponentProps, PageComponent} from '../types/PageComponent';

type Direction = 1 | -1;

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
            transform: x && x.interpolate((xValue: number | undefined = 0) => `translateX(${-xValue * 200}px)`),
        },
        contentProps: {
            transform: x && x.interpolate((xValue: number | undefined = 0) => `translateX(${xValue * 250}px)`),
        },
        props: restProps,
    };
};

export function usePageHeaderTransition(routeComponent: PageComponent, direction: Direction = 1): UsePageHeaderTransitionResult {
    const transitions = useTransition<PageComponent, EarlyPageHeaderTransitionProps>(
        [routeComponent],
        (item: PageComponent) => item.displayName,
        {
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
                x: direction * -1,
                position: 'absolute',
                width: '100%',
                transform: 'translate(100%)',
            },
            config: config.stiff,
        },
    );

    return (renderCallback: RenderCallback) => transitions.map(interpolateHeaderProps).map(renderCallback);
}
