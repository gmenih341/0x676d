export function debounce (fun, delay, target) {
    let timeout;
    return (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fun.apply(target, args);
        }, delay);
    };
}

export function throttle (fun, delay, target) {
    let timeout = 0;
    return (...args) => {
        if (!timeout) {
            fun.apply(target, args);
        } else {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            timeout = 0;
        }, delay);
    };
}
