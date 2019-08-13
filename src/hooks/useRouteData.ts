import {useMemo} from 'react';
import {RouteData} from '../types/RouteData';
import {routes} from '../constants/route.constants';

function getRouteData(pathname: string): RouteData {
    return pathname in routes ? routes[pathname] : routes['/'];
}

export function useRouteData(pathname: string): RouteData {
    return useMemo(() => getRouteData(pathname), [pathname]);
}
