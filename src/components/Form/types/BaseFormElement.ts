export interface BaseFormElement<T> {
    className?: string;
    placeholder?: string;
    name?: string;
    value?: T;
    setValue?: (value: T) => void;
}
