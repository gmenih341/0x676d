export enum Direction {
    Up = -1,
    Down = 1,
}

export type Nullable<T> = T | null;

export type PageChangeCallback = (direction: Direction) => void;