export interface RouteData {
    header: {
        title: string;
        description: string;
    };
}

const routes: Record<string, RouteData> = {
    '/': {
        header: {
            title: 'Gregor Menih',
            description: 'front-end web developer',
        },
    },
    '/work': {
        header: {
            title: 'Projects',
            description: "some of the things I've built",
        },
    },
    '/contact': {
        header: {
            title: 'Contact',
            description: 'get in touch with me',
        },
    },
};

export function getRouteData(route: string): RouteData {
    return routes[route] || routes['/'];
}
