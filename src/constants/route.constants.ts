import {RouteData} from '../types/RouteData';

export const routes: Record<string, RouteData> = {
    '/': {
        menuText: 'cv',
        index: 0,
        head: {
            title: 'about',
            description: 'full-stack web developer',
        },
    },
    '/contact': {
        menuText: 'contact',
        index: 9,
        head: {
            title: 'contact',
            description: 'get in touch with me',
        },
    },
};
