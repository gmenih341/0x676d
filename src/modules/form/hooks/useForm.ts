import {useReducer} from 'react';

type SetFormField<T, K extends keyof T> = (key: K, value: T[K]) => void;

export function useForm<T, K extends keyof T>(initialState: T): [T, SetFormField<T, K>] {
    const [formState, dispatch] = useReducer((state: T, action: Partial<T>): T => {
        return {
            ...state,
            ...action,
        };
    }, initialState);

    return [
        formState,
        (key: keyof T, value: T[K]): void => {
            dispatch({
                [key]: value,
            } as any);
        },
    ];
}
