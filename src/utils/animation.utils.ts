type EasingFunction = (t: number) => number;
interface AnimationOptions {
    ease?: EasingFunction;
    callback?: () => void;
    transitionTime?: number;
}

export const EasingFunctions = {
    linear: (t: number) => t,
    easeInQuad: (t: number) => t * t,
    easeOutQuad: (t: number) => t * (2 - t),
    easeInOutQuad: (t: number) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: (t: number) => t * t * t,
    easeOutCubic: (t: number) => (--t) * t * t + 1,
    easeInOutCubic: (t: number) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeInQuart: (t: number) => t * t * t * t,
    easeOutQuart: (t: number) => 1 - (--t) * t * t * t,
    easeInOutQuart: (t: number) => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
    easeInQuint: (t: number) => t * t * t * t * t,
    easeOutQuint: (t: number) => 1 + (--t) * t * t * t * t,
    easeInOutQuint: (t: number) => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
};

const NO_OP = (): void => {};

export function animate(fun: (value: number) => void, options: AnimationOptions = {}): void {
    const ease: EasingFunction = options.ease || EasingFunctions.linear;
    const transitionTime: number = options.transitionTime || 1;
    const step: number = 1 / transitionTime;
    const callback: () => void = options.callback || NO_OP;
    let change: number = 0;
    let prevTime: number = Date.now();

    const frame = () => {
        if (change >= 1) {
            fun(ease(1));
            callback();
            return;
        }
        fun(ease(change));
        const currTime: number = Date.now();
        const deltaTime: number = currTime - prevTime;
        change += step * deltaTime;
        prevTime = currTime;

        window.requestAnimationFrame(frame);
    };

    frame();
};

export function scrollSmoothly(targetElement: HTMLElement, targetScroll: number, options?: AnimationOptions): void {
    const currentScroll: number = targetElement.scrollTop;
    const deltaScroll: number = targetScroll - currentScroll;
    if (!deltaScroll) {
        return;
    }
    animate((percent: number) => {
        const currentPosition: number = currentScroll + (deltaScroll * percent);
        targetElement.scrollTo(0, currentPosition);
    }, options);
};