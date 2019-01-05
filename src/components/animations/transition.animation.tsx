import React, {Component, CSSProperties, ReactElement, ReactNode, FunctionComponent} from 'react';
import {useSpring} from 'react-spring/hooks';

export interface ITransitionAnimationChildProps {
    style: CSSProperties;
}

export interface ITransitionAnimationProps<T extends Component<P>, P> {
    ChildComponent: T;
    from: CSSProperties;
    to: CSSProperties;
    props: P;
    children: ReactNode;
}

export function TransitionAnimation<T extends Component<P>, P> ({ChildComponent, from, to, children, ...props}: ITransitionAnimationProps<T, P>): ReactElement<P> {
    const style = useSpring({...to, from, config: {friction: 40}});
    return (
        <ChildComponent {{...props, style}}>
            {children}
        </ChildComponent>
    )
}