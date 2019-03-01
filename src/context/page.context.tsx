import styled from '@emotion/styled';
import React, {createContext, Dispatch, FunctionComponent, InputIdentityList, SetStateAction, useEffect, useState} from 'react';
import pages, {IPage} from '../assets/pages.json5';

export interface IPageContext {
    page: number;
    pages: IPage[];
    setPage: Dispatch<SetStateAction<number>>;
}

export const PageContext = createContext<IPageContext>({
    page: 0,
    pages: [],
    setPage: () => {},
});

export const PageContextProvider: FunctionComponent = ({children}) => {
    const [page, setPage] = useState(0);
    useBrowserTitle(`${pages[page].title} / ${pages[page].browserTitle}`, [page]);
    return (
        <PageContext.Provider
            value={{
                pages,
                page,
                setPage,
            }}>
            {children}
        </PageContext.Provider>
    );
};

function useBrowserTitle(title: string, props: InputIdentityList): void {
    useEffect(() => {
        document.title = title;
    }, props);
}
