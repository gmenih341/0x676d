import Router from 'next/router';
import {useEffect, useState} from 'react';

export function useMenu(): [boolean, (force: boolean) => void] {
    const [active, setActive] = useState(false);
    useEffect(() => {
        const hideMenuOnRouteChange = () => setActive(false);
        Router.events.on('routeChangeComplete', hideMenuOnRouteChange);
        window.scrollTo(0, 0);
        return () => Router.events.off('routeChangeComplete', hideMenuOnRouteChange);
    }, []);
    return [active, setActive];
}
