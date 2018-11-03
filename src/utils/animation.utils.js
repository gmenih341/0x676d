export const EasingFunctions = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    easeInCubic: t => t * t * t,
    easeOutCubic: t => --t * t * t + 1,
    easeInOutCubic: t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - --t * t * t * t,
    easeInOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => 1 + --t * t * t * t * t,
    easeInOutQuint: t => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
};

const NO_OP = () => {};

export function animate (fun, options = {}) {
    const ease = options.ease || EasingFunctions.linear;
    const transitionTime = options.transitionTime || 1;
    const step = 1 / transitionTime;
    const callback = options.callback || NO_OP;
    let change = 0;
    let prevTime = Date.now();

    const frame = () => {
        if (change >= 1) {
            fun(ease(1));
            callback();
            return;
        }
        fun(ease(change));
        const currTime = Date.now();
        const deltaTime = currTime - prevTime;
        change += step * deltaTime;
        prevTime = currTime;

        window.requestAnimationFrame(frame);
    };

    frame();
}

export function scrollSmoothly (targetElement, targetScroll, options) {
    const currentScroll = targetElement.scrollTop;
    const deltaScroll = targetScroll - currentScroll;
    if (!deltaScroll) {
        return;
    }
    animate(percent => {
        const currentPosition = currentScroll + deltaScroll * percent;
        targetElement.scrollTo(0, currentPosition);
    }, options);
}
