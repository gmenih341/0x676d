export interface Base {}

export interface Constructor<T> {
    new (...args: any[]): T;
}

export type Extendable<T> = (parentClass: Constructor<T>) => Constructor<T>;