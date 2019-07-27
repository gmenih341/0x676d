import {RouteData} from '../types/RouteData';

export const routes: Record<string, RouteData> = {
    '/': {
        menuText: 'cv',
        header: {
            title: 'Gregor Menih',
            description: 'full-stack web developer',
        },
    },
    '/contact': {
        menuText: 'shoot me',
        header: {
            title: 'Contact',
            description: 'get in touch with me',
        },
    },
};
