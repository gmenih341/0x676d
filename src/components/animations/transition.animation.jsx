import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSpring} from 'react-spring/hooks';

// To use this component the child component must be `animated.div` and pass style prop
export function TransitionAnimation ({Component, children, from, to, ...props}) {
    useParentProps(Component, {
        Component: PropTypes.func,
        from: PropTypes.string,
        to: PropTypes.string,
        config: PropTypes.object,
    });
    const transition = useSpring({...to, from, config: {delay: 1000, friction: 40}});
    return (
        <Component {...props} style={transition}>
            {children}
        </Component>
    );
}

function useParentProps (component, props) {
    useEffect(() => {
        TransitionAnimation.propTypes = {
            ...component.__proto__.constructor.propTypes,
            ...props,
        };
    }, []);
}
