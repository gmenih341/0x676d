import {useMemo} from 'react';
import {RouteData} from '../types/RouteData';
import {routes} from '../constants/route.constants';


function getRouteData(pathname: string): RouteData {
    const routeIndex = routes.findIndex((r) => r.path === pathname);
    const index = routeIndex === -1 ? 0 : routeIndex;
    return {
        index,
        ...routes[index],
    };
}

export function useRouteData(pathname: string): RouteData {
    return useMemo(() => getRouteData(pathname), [pathname]);
}
