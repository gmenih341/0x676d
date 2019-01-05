export function throttle(fun, delay) {
    let timeout = 0;
    return (...args) => {
        if (!timeout) {
            fun(...args);
        } else {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            timeout = undefined;
        }, delay);
    };
}
