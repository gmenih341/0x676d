import React, {createContext, useEffect, FunctionComponent, InputIdentityList} from 'react';
import pages from '../assets/pages.json5';
import {useScrollingPage} from '../hooks/wheel-page/wheel-page.hook';
import {IPageContext} from './page.types';

export const PageContext = createContext<IPageContext>({
    page: 0,
    pages: [],
    setPage: () => {},
});

export const PageContextProvider: FunctionComponent = ({children}) => {
    const [page, setPage] = useScrollingPage(pages.length, {duration: 300});
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
}

function useBrowserTitle (title: string, props: InputIdentityList): void {
    useEffect(() => {
        document.title = title;
    }, props);
}
