import {RawRouteData} from '../types/RouteData';

export const routes: RawRouteData[] = [
    {
        menuText: 'cv',
        path: '/',
        head: {
            title: 'homepage',
            description: 'full-stack web developer',
        },
    },
    // {
    //     menuText: 'blug',
    //     path: '/blog',
    //     head: {
    //         title: 'blog',
    //         description: 'some of my writings',
    //     },
    // },
    {
        menuText: 'contact',
        path: '/contact',
        head: {
            title: 'contact',
            description: 'get in touch with me',
        },
    },
];
