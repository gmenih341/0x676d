import {IPage} from '*/assets/pages.json5';

export type SetPageFunction = (page: number) => void;

export interface IPageContext {
    page: number;
    pages: IPage[];
    setPage: SetPageFunction;
}
