import {useEffect} from 'react';
import {scrollSmoothly, EasingFunctions} from '../../utils/animation.utils';

export function useScrollToActive (activePage, height, ref) {
    useEffect(
        () => {
            scrollSmoothly(ref.current, height * activePage, {
                transitionTime: 250,
                ease: EasingFunctions.easeOutQuad,
            });
        },
        [activePage],
    );
}
