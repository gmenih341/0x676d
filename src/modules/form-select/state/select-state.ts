import {Reducer, Dispatch, useReducer} from 'react';

export enum SelectActionType {
    OPEN,
    CLOSE,
    TOGGLE,
    SELECTED,
    FOCUSED,
}

interface SelectState {
    value: string;
    open: boolean;
    selectIndex: number;
}

interface SelectAction {
    type: SelectActionType;
    selectedIndex?: number;
    option?: string;
}

const reducer: Reducer<SelectState, SelectAction> = (state, action) => {
    console.log(SelectActionType[action.type], action, state);
    switch (action.type) {
        case SelectActionType.OPEN:
            if (state.open === false) {
                return {
                    ...state,
                    open: true,
                };
            }
            break;
        case SelectActionType.CLOSE:
            if (state.open === true) {
                return {
                    ...state,
                    open: false,
                };
            }
            break;
        case SelectActionType.TOGGLE:
            return {
                ...state,
                open: !state.open,
            };
        case SelectActionType.FOCUSED:
            if (action.selectedIndex !== undefined) {
                return {
                    ...state,
                    selectIndex: action.selectedIndex,
                };
            }
            break;
        case SelectActionType.SELECTED:
            if (action.option) {
                return {
                    ...state,
                    open: false,
                    value: action.option,
                    selectIndex: -1,
                };
            }
            break;
    }
    return state;
};

export function useSelectState(): [SelectState, Dispatch<SelectAction>] {
    return useReducer<Reducer<SelectState, SelectAction>>(reducer, {
        value: '',
        open: false,
        selectIndex: -1,
    });
}
