import {withRouter, NextRouter} from 'next/router';
import React, {Context, createContext, useMemo} from 'react';

interface RouterContextProps {
    pathname: string;
    router?: NextRouter;
}

export const RouterContext: Context<RouterContextProps> = createContext({
    pathname: '/',
});

export const NextRouterProvider = withRouter(({children, router}) => {
    const pathname = useMemo(() => (router && router.pathname) || '/', [router]);
    return <RouterContext.Provider value={{router, pathname}}>{children}</RouterContext.Provider>;
});
