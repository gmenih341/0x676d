export interface RawRouteData {
    menuText: string;
    path: string;
    head: {
        title: string;
        description: string;
    };
}

export interface RouteData extends RawRouteData {
    index: number;
}