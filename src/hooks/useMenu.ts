import {useState, useCallback, useEffect} from 'react';
import Router from 'next/router';

export function useMenu(): [boolean, (force: boolean) => void] {
    const [active, setActive] = useState(false);
    const toggleMenu = useCallback((force: boolean) => setActive(force === undefined ? !active : force), [active]);
    useEffect(() => {
        const hideMenuOnRouteChange = () => setActive(false);
        Router.events.on('routeChangeComplete', hideMenuOnRouteChange);
        window.scrollTo(0, 0);
        return () => Router.events.off('routeChangeComplete', hideMenuOnRouteChange);
    }, []);
    return [active, toggleMenu];
}
