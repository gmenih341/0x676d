import {useMemo} from 'react';
import {getRouteData, RouteData} from '../routes';

export function useRouteData(pathname: string): RouteData {
    return useMemo(() => getRouteData(pathname), [pathname]);
}
