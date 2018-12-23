import PropTypes from 'prop-types';
import React from 'react';
import {useSpring} from 'react-spring/hooks';

// To use this component the child component must be `animated.div` and pass style prop
export function TransitionAnimation ({Component, children, from, to, ...props}) {
    const transition = useSpring({...to, from, config: {delay: 1000, friction: 40}});
    return (
        <Component {...props} style={transition}>
            {children}
        </Component>
    );
}

TransitionAnimation.propTypes = {
    Component: PropTypes.func.isRequired,
    to: PropTypes.object.isRequired,
    from: PropTypes.object,
};
