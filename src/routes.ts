export interface RouteData {
    menuText: string;
    header: {
        title: string;
        description: string;
    };
}

export const routes: Record<string, RouteData> = {
    '/': {
        menuText: 'cv',
        header: {
            title: 'Gregor Menih',
            description: 'full-stack web developer',
        },
    },
    '/contact': {
        menuText: 'contact',
        header: {
            title: 'Contact',
            description: 'get in touch with me',
        },
    },
};

export function getRouteData(route: string): RouteData {
    return routes[route] || routes['/'];
}
