export function debounce (fun: (...args: any[]) => any, delay: number, target?: any): (...args: any[]) => any {
    let timeout: number;
    return (...args: any[]): any => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fun.apply(target, args);
        }, delay);
    }
}

export function throttle (fun: (...args: any[]) => any, delay: number, target?: any): (...args: any[]) => any {
    let timeout: number = 0;
    return (...args: any[]): any => {
        if (!timeout) {
            fun.apply(target, args);
        } else {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            timeout = 0;
        }, delay);
    }
}