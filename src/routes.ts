export interface RouteData {
    menuText: string;
    header: {
        title: string;
        description: string;
    };
}

export const routes: Record<string, RouteData> = {
    '/': {
        menuText: 'about',
        header: {
            title: 'Gregor Menih',
            description: 'front-end web developer',
        },
    },
    '/work': {
        menuText: 'work',
        header: {
            title: 'Projects',
            description: "some of the things I've built",
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
