import {RouteData} from '../types/RouteData';

export const routes: Record<string, RouteData> = {
    '/': {
        menuText: 'cv',
        index: 0,
        header: {
            title: 'Gregor Menih',
            description: 'full-stack web developer',
        },
    },
    '/contact': {
        menuText: 'shoot me',
        index: 9,
        header: {
            title: 'Contact',
            description: 'get in touch with me',
        },
    },
};
